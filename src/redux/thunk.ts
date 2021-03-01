import {ThunkAction} from "redux-thunk";
import {AllActionTypes} from "../types/actionsTypes";
import {IGameCard, ISettings, IState} from "../types/reducerTypes";
import {gameMode} from "../utils/gameMode";
import {shuffleArray} from "../utils/shuffleArray";
import {
    autoplayMemory,
    autoplayStep,
    clearFlippedCards,
    closeAllCards,
    closeCard,
    finishGame,
    flipCard,
    pairsFoundAC, reloadedStateAC,
    setCards,
    setFlippedCard, setSettings, startGame
} from "./actions";
import {Howler} from "howler";
import {failSound, mainThemeSound, successSound, victorySound} from "../utils/sounds";


export const initialThunk = (): ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {
        let pairCount = gameMode(getState().settings.gameMode)

        let oldCards = shuffleArray(getState().cards).slice(0, pairCount)
        const cards = shuffleArray([...oldCards, ...oldCards]).map((imageUrl, index) => ({
            id: index,
            imageUrl,
            isFlipped: getState().settings.showCards,
            pairFound: false
        }))
        dispatch(setCards(cards))
    }
}


export const newGameThunk = (): ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {

        mainThemeSound.stop()

        if (getState().stat.length > 0) {
            dispatch(initialThunk())
        }

        setTimeout(() => {
            dispatch(closeAllCards())
            dispatch(startGame())
            mainThemeSound.play()
        }, getState().settings.speed)
    }
}

export const flipCardThunk = (card: IGameCard): ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {
        if (getState().isStarted) {

            if (getState().flippedCards.length === 0) {
                dispatch(flipCard(card.id))
                dispatch(setFlippedCard(card))
            }

            if (getState().flippedCards.length === 1) {
                //чтобы не было даблаклика по карте и зачета
                if (getState().flippedCards[0]?.id !== card.id) {
                    dispatch(flipCard(card.id))
                    dispatch(setFlippedCard(card))

                    setTimeout(() => {
                        if (getState().flippedCards.length === 2) {
                            //если имена карт совпали, диспатчим эту пару с флагом pairFround=true
                            if (getState().flippedCards[0].imageUrl === getState().flippedCards[1].imageUrl) {
                                let changedCards = getState().gameCards.map(card => {
                                    if (card.imageUrl === getState().flippedCards[0].imageUrl) {
                                        return {
                                            id: card.id,
                                            imageUrl: card.imageUrl,
                                            isFlipped: true,
                                            pairFound: true
                                        }
                                    } else {
                                        return card
                                    }
                                })
                                //успешный диспатч
                                successSound.play()
                                dispatch(pairsFoundAC(getState().pairsFound + 1))
                                dispatch(setCards(changedCards))
                                dispatch(clearFlippedCards())

                                if (getState().pairsFound === gameMode(getState().settings.gameMode)) {
                                    mainThemeSound.stop()
                                    victorySound.play()
                                    dispatch(finishGame({
                                        attempt: getState().stat.length + 1,
                                        steps: getState().count,
                                        gameMode: getState().settings.gameMode,
                                        date: new Date().toLocaleString()
                                    }))
                                }
                            } else {
                                //провальный диспатч
                                failSound.play()
                                dispatch(closeCard(getState().flippedCards[0].id))
                                dispatch(closeCard(getState().flippedCards[1].id))
                                dispatch(clearFlippedCards())
                            }
                        }
                    }, getState().settings.speed)

                }
            }
        }
    }
}

export const settingsThunk = (settings: ISettings): ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {

        //volume
        mainThemeSound.volume(settings.musicVolume)
        victorySound.volume(settings.soundsVolume)
        failSound.volume(settings.soundsVolume)
        successSound.volume(settings.soundsVolume)

        dispatch(setSettings(settings))

    }
}


export const autoPlayThunk = (): ThunkAction<void, IState, unknown, AllActionTypes> => {
    return async (dispatch, getState) => {

         dispatch(newGameThunk())

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            },  3000);
        });

        while (!getState().isFinished) {

            if (getState().gameCards[getState().autoplayStep].pairFound) {
                dispatch(autoplayStep(getState().autoplayStep+1))
                continue;
            }

            if (getState().flippedCards.length === 0) {
                dispatch(flipCardThunk(getState().gameCards[getState().autoplayStep]))
                dispatch(autoplayMemory(getState().gameCards[getState().autoplayStep]))
            } else if (getState().flippedCards.length === 1) {
                let firstCardImageUrl = getState().flippedCards[0].imageUrl
                let firstCardId = getState().flippedCards[0].id
                let secondCardIndex = getState().autoplayStep
                getState().autoplayMemory.map(el => {
                    if (el.imageUrl === firstCardImageUrl && el.id !== firstCardId) {
                        secondCardIndex = el.id;
                    }
                })
                if (secondCardIndex !== getState().autoplayStep) {
                    dispatch(autoplayStep(getState().autoplayStep-1))
                }
                dispatch(flipCardThunk(getState().gameCards[secondCardIndex]))
                dispatch(autoplayMemory(getState().gameCards[secondCardIndex]))
            }
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                },  2000);
            });
            getState().autoplayStep < gameMode(getState().settings.gameMode)*2 - 1 ? dispatch(autoplayStep(getState().autoplayStep+1))
                : (dispatch(autoplayStep(0)));
        }
    }
}


export const onClosePageThunk = (): ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {
        // localStorage.setItem('memory-game-stats', JSON.stringify(getState().stat))
        // localStorage.setItem('memory-game-settings', JSON.stringify(getState().settings))
        localStorage.setItem('memory-game-state', JSON.stringify(getState()))
    }
}

export const onReloadedPageThunk = (state:IState): ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {
        dispatch(reloadedStateAC(state))
        mainThemeSound.play()
    }
}











// export const autoPlayThunk = (): ThunkAction<void, IState, unknown, AllActionTypes> => {
//     return async (dispatch, getState) => {
//
//         dispatch(newGameThunk())
//
//         await new Promise((res) => {
//             setTimeout(() => {
//                 res(true)
//             }, getState().settings.speed)
//         })
//
//         // setTimeout(() => {
//
//
//
//         while (getState().pairsFound !== gameMode(getState().settings.gameMode)) {
//
//             await new Promise((res) => {
//                 setTimeout(() => {
//                     res(true)
//                 }, getState().settings.speed)
//             })
//
//             if (getState().flippedCards.length === 0) {
//
//                 dispatch(flipCard(getState().gameCards[getState().autoplayStep].id))
//                 dispatch(setFlippedCard(getState().gameCards[getState().autoplayStep]))
//                 dispatch(autoplayMemory(getState().gameCards[getState().autoplayStep]))
//
//                 dispatch(autoplayStep(getState().autoplayStep + 1))
//                 continue
//
//             }
//
//             if (getState().flippedCards.length === 1) {
//
//                 console.log(getState().flippedCards[0]?.id)
//                 console.log(getState().gameCards[getState().autoplayStep].id)
//                 if (getState().flippedCards[0]?.id !== getState().gameCards[getState().autoplayStep].id) {
//
//
//                     //если такая карта уже попадалась
//                     let isFind = getState().autoplayMemory.filter(obj => obj.imageUrl === getState().gameCards[getState().autoplayStep].imageUrl)
//
//
//                     if (isFind.length > 0) {
//
//
//                         dispatch(flipCard(isFind[0].id))
//                         dispatch(setFlippedCard(isFind[0]))
//
//
//                         let changedCards = getState().gameCards.map(card => {
//
//                             if (card.imageUrl === getState().flippedCards[0].imageUrl) {
//                                 return {
//                                     id: card.id,
//                                     imageUrl: card.imageUrl,
//                                     isFlipped: true,
//                                     pairFound: true
//                                 }
//                             } else {
//                                 return card
//                             }
//                         })
//
//                         //успешный диспатч
//                         successSound.play()
//                         dispatch(pairsFoundAC(getState().pairsFound + 1))
//                         dispatch(setCards(changedCards))
//                         dispatch(clearFlippedCards())
//
//                         dispatch(autoplayStep(getState().autoplayStep + 1))
//
//
//
//                     } else {
//
//
//                         // dispatch(autoplayStep(getState().autoplayStep + 1))
//                         dispatch(flipCard(getState().gameCards[getState().autoplayStep].id))
//                         dispatch(setFlippedCard(getState().gameCards[getState().autoplayStep]))
//                         dispatch(autoplayMemory(getState().gameCards[getState().autoplayStep]))
//
//
//
//
//                         // setTimeout(() => {
//                             if (getState().flippedCards.length === 2) {
//
//                                 //если имена карт совпали, диспатчим эту пару с флагом pairFround=true
//                                 if (getState().flippedCards[0].imageUrl === getState().flippedCards[1].imageUrl) {
//                                     let changedCards = getState().gameCards.map(card => {
//                                         if (card.imageUrl === getState().flippedCards[0].imageUrl) {
//                                             return {
//                                                 id: card.id,
//                                                 imageUrl: card.imageUrl,
//                                                 isFlipped: true,
//                                                 pairFound: true
//                                             }
//                                         } else {
//                                             return card
//                                         }
//                                     })
//                                     //успешный диспатч
//
//                                     successSound.play()
//                                     dispatch(pairsFoundAC(getState().pairsFound + 1))
//                                     dispatch(setCards(changedCards))
//                                     dispatch(clearFlippedCards())
//                                     dispatch(autoplayStep(getState().autoplayStep + 1))
//
//
//                                 } else {
//
//                                     //провальный диспатч
//                                     failSound.play()
//                                     dispatch(closeCard(getState().flippedCards[0].id))
//                                     dispatch(closeCard(getState().flippedCards[1].id))
//                                     dispatch(clearFlippedCards())
//                                     dispatch(autoplayStep(getState().autoplayStep + 1))
//                                 }
//                             }
//                         // }, getState().settings.speed)
//                     }
//                 }
//
//
//             }
//
//         }
//
//         console.log(getState().pairsFound)
//         mainThemeSound.stop()
//         victorySound.play()
//         dispatch(finishGame({
//             attempt: getState().stat.length + 1,
//             steps: getState().count,
//             gameMode: getState().settings.gameMode,
//             date: new Date().toLocaleString()
//         }))
//
//
//         // }, 2000)
//
//
//     }
//
// }

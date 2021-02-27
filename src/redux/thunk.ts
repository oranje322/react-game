import {ThunkAction} from "redux-thunk";
import {AllActionTypes} from "../types/actionsTypes";
import {IGameCard, ISettings, IState} from "../types/reducerTypes";
import {gameMode} from "../utils/gameMode";
import {shuffleArray} from "../utils/shuffleArray";
import {
    clearFlippedCards,
    closeAllCards,
    closeCard,
    finishGame,
    flipCard,
    pairsFoundAC,
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
            if (getState().flippedCards.length < 2) {
                if (getState().flippedCards[0]?.id !== card.id) {
                    dispatch(flipCard(card.id))
                    dispatch(setFlippedCard(card))
                }

            }

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
                                gameMode: getState().settings.gameMode
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

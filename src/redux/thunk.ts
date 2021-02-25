import { ThunkAction } from "redux-thunk";
import { AllActionTypes } from "../types/actionsTypes";
import {IGameCard, IState} from "../types/reducerTypes";
import {shuffleArray} from "../utils/shuffleArray";
import {clearFlippedCards, flipCard, setCards, setFlippedCard} from "./actions";

export const setCardsThunk = ():ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {
        let pairCount = 9;
        let oldCards = shuffleArray(getState().cards).slice(0, pairCount)
        const cards = shuffleArray([...oldCards, ...oldCards]).map((imageUrl, index) => ({
            id: index,
            imageUrl,
            isFlipped: true,
            pairFound: false
        }))
        dispatch(setCards(cards))

    }
}

export const flipCardThunk = (card:IGameCard):ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {
        if(getState().isStarted){
            if(getState().flippedCards.length < 2) {
                if(getState().flippedCards[0]?.id !== card.id){
                    dispatch(flipCard(card.id))
                    dispatch(setFlippedCard(card))
                }

            }

            setTimeout(()=> {
            if(getState().flippedCards.length === 2) {
                //если имена карт совпали, диспатчим эту пару с флагом pairFround=true
                    if(getState().flippedCards[0].imageUrl === getState().flippedCards[1].imageUrl) {
                        let changedCards = getState().gameCards.map(card => {
                            if(card.imageUrl === getState().flippedCards[0].imageUrl) {
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
                        dispatch(setCards(changedCards))
                        dispatch(clearFlippedCards())
                    } else {
                        dispatch(flipCard(getState().flippedCards[0].id))
                        dispatch(flipCard(getState().flippedCards[1].id))
                        dispatch(clearFlippedCards())
                    }

            }},1000)
        }
    }
}

import { ThunkAction } from "redux-thunk";
import { AllActionTypes } from "../types/actionsTypes";
import {IState} from "../types/reducerTypes";
import {shuffleArray} from "../utils/shuffleArray";
import {setCards} from "./actions";

export const setCardsThunk = ():ThunkAction<void, IState, unknown, AllActionTypes> => {
    return (dispatch, getState) => {
        let pairCount = 9;
        console.log('old', getState().cards)
        let oldCards = shuffleArray(getState().cards).slice(0, pairCount)
        console.log('new', oldCards)
        const cards = shuffleArray([...oldCards, ...oldCards]).map((imageUrl, index) => ({
            id: index,
            imageUrl,
            isFlipped: true,
        }))
        console.log('last', cards)
        dispatch(setCards(cards))

    }
}

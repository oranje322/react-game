import {CLEAR_FLIPPED_CARDS, CLOSE_ALL_CARDS, FLIP_CARD, SET_CARDS, SET_FLIPPED_CARD} from "../redux/const";
import {IGameCard} from "./reducerTypes";


export interface ISetCards {
    type: typeof SET_CARDS
    payload: IGameCard[]
}

export interface IFlipCard {
    type: typeof FLIP_CARD,
    payload: number
}

export interface ICloseAllCards {
    type: typeof CLOSE_ALL_CARDS
}

export interface ISetFlippedCard {
    type: typeof SET_FLIPPED_CARD,
    payload: IGameCard
}

export interface IClearFlippedCards {
    type: typeof CLEAR_FLIPPED_CARDS
}

export type AllActionTypes = ISetCards | IFlipCard | ICloseAllCards | ISetFlippedCard | IClearFlippedCards
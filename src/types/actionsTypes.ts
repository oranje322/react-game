import {CLOSE_ALL_CARDS, FLIP_CARD, SET_CARDS} from "../redux/const";
import {IGameCard} from "./reducerTypes";


export interface ISetCards {
    type: typeof SET_CARDS
}

export interface IFlipCard {
    type: typeof FLIP_CARD,
    payload: number
}

export interface ICloseAllCards {
    type: typeof CLOSE_ALL_CARDS
}

export type AllActionTypes = ISetCards | IFlipCard | ICloseAllCards
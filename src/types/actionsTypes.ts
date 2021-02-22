import {FLIP_CARD, SET_CARDS} from "../redux/const";
import {IGameCard} from "./reducerTypes";


export interface ISetCards {
    type: typeof SET_CARDS
}

export interface IFlipCard {
    type: typeof FLIP_CARD,
    payload: number

}

export type AllActionTypes = ISetCards | IFlipCard
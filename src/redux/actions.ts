import {IFlipCard, ISetCards} from "../types/actionsTypes";
import {FLIP_CARD, SET_CARDS} from "./const";
import {IGameCard} from "../types/reducerTypes";


export const setCards = ():ISetCards => ({type: SET_CARDS})
export const flipCard = (payload:number):IFlipCard => ({type: FLIP_CARD, payload})
import {ICloseAllCards, IFlipCard, ISetCards} from "../types/actionsTypes";
import {CLOSE_ALL_CARDS, FLIP_CARD, SET_CARDS} from "./const";


export const setCards = ():ISetCards => ({type: SET_CARDS})
export const flipCard = (payload:number):IFlipCard => ({type: FLIP_CARD, payload})
export const closeAllCards = ():ICloseAllCards => ({type: CLOSE_ALL_CARDS})
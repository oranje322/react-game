import {ICloseAllCards, IFlipCard, ISetCards} from "../types/actionsTypes";
import {CLOSE_ALL_CARDS, FLIP_CARD, SET_CARDS} from "./const";
import {IGameCard} from "../types/reducerTypes";


export const setCards = (payload:IGameCard[]):ISetCards => ({type: SET_CARDS, payload})
export const flipCard = (payload:number):IFlipCard => ({type: FLIP_CARD, payload})
export const closeAllCards = ():ICloseAllCards => ({type: CLOSE_ALL_CARDS})
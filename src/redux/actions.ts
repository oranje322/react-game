import {
    IClearFlippedCards,
    ICloseAllCards,
    ICloseCard,
    IFlipCard,
    ISetCards,
    ISetFlippedCard,
    ISetMode,
    IStartGame
} from "../types/actionsTypes";
import {
    CLEAR_FLIPPED_CARDS,
    CLOSE_ALL_CARDS,
    CLOSE_CARD,
    FLIP_CARD,
    SET_CARDS,
    SET_FLIPPED_CARD,
    SET_MODE,
    START_GAME
} from "./const";
import {IGameCard} from "../types/reducerTypes";


export const setCards = (payload:IGameCard[]):ISetCards => ({type: SET_CARDS, payload})
export const flipCard = (payload:number):IFlipCard => ({type: FLIP_CARD, payload})
export const closeCard = (payload:number):ICloseCard => ({type: CLOSE_CARD, payload})
export const setFlippedCard = (payload:IGameCard):ISetFlippedCard => ({type: SET_FLIPPED_CARD, payload})
export const clearFlippedCards = ():IClearFlippedCards => ({type: CLEAR_FLIPPED_CARDS})
export const closeAllCards = ():ICloseAllCards => ({type: CLOSE_ALL_CARDS})
export const startGame = ():IStartGame => ({type: START_GAME})
export const setMode = (payload:number):ISetMode => ({type: SET_MODE, payload})
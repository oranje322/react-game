import {
    IClearFlippedCards,
    ICloseAllCards,
    ICloseCard,
    IFinishGame,
    IFlipCard,
    IMuteSound,
    IPairsFound,
    ISetCards,
    ISetFlippedCard,
    ISetSettings,
    IStartGame
} from "../types/actionsTypes";
import {
    CLEAR_FLIPPED_CARDS,
    CLOSE_ALL_CARDS,
    CLOSE_CARD,
    FINISH_GAME,
    FLIP_CARD,
    MUTE_SOUND,
    PAIRS_FOUND,
    SET_CARDS,
    SET_FLIPPED_CARD,
    SET_SETTINGS,
    START_GAME
} from "./const";
import {IGameCard, ISettings, IStat} from "../types/reducerTypes";


export const setCards = (payload:IGameCard[]):ISetCards => ({type: SET_CARDS, payload})
export const flipCard = (payload:number):IFlipCard => ({type: FLIP_CARD, payload})
export const closeCard = (payload:number):ICloseCard => ({type: CLOSE_CARD, payload})
export const setFlippedCard = (payload:IGameCard):ISetFlippedCard => ({type: SET_FLIPPED_CARD, payload})
export const clearFlippedCards = ():IClearFlippedCards => ({type: CLEAR_FLIPPED_CARDS})
export const closeAllCards = ():ICloseAllCards => ({type: CLOSE_ALL_CARDS})
export const startGame = ():IStartGame => ({type: START_GAME})
export const finishGame = (payload:IStat):IFinishGame => ({type: FINISH_GAME, payload})
export const setSettings = (payload:ISettings):ISetSettings => ({type: SET_SETTINGS, payload})
export const pairsFoundAC = (payload:number):IPairsFound => ({type: PAIRS_FOUND, payload})
export const muteSoundAC = ():IMuteSound => ({type: MUTE_SOUND})
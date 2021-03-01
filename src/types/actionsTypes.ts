import {
    AUTOPLAY_MEMORY, AUTOPLAY_STEP,
    CLEAR_FLIPPED_CARDS,
    CLOSE_ALL_CARDS,
    CLOSE_CARD, FINISH_GAME,
    FLIP_CARD, MUTE_SOUND, PAIRS_FOUND, RELOADED_STATE,
    SET_CARDS,
    SET_FLIPPED_CARD, SET_SETTINGS,
    START_GAME
} from "../redux/const";
import {IGameCard, ISettings, IStat, IState} from "./reducerTypes";


export interface ISetCards {
    type: typeof SET_CARDS
    payload: IGameCard[]
}

export interface IFlipCard {
    type: typeof FLIP_CARD,
    payload: number
}

export interface ICloseCard {
    type: typeof CLOSE_CARD,
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

export interface IStartGame {
    type: typeof START_GAME
}

export interface IFinishGame {
    type: typeof FINISH_GAME,
    payload: IStat
}

export interface ISetSettings {
    type: typeof SET_SETTINGS,
    payload: ISettings
}


export interface IPairsFound {
    type: typeof PAIRS_FOUND,
    payload: number
}

export interface IMuteSound {
    type: typeof MUTE_SOUND
}

export interface IAutoplayMemory {
    type: typeof AUTOPLAY_MEMORY
    payload: IGameCard
}

export interface IAutoplayStep {
    type: typeof AUTOPLAY_STEP
    payload: number
}

export interface IReloadedState {
    type: typeof RELOADED_STATE,
    payload: IState
}



export type AllActionTypes = ISetCards | IFlipCard | ICloseAllCards |
    ISetFlippedCard | IClearFlippedCards | IStartGame | ICloseCard |
    ISetSettings | IFinishGame | IPairsFound | IMuteSound | IAutoplayMemory |
    IAutoplayStep | IReloadedState
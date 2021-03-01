import {
	IAutoplayMemory,
	IAutoplayStep,
	IClearFlippedCards,
	ICloseAllCards,
	ICloseCard,
	IFinishGame,
	IFlipCard,
	IMuteSound,
	IPairsFound,
	IReloadedState,
	ISetCards,
	ISetFlippedCard,
	ISetSettings,
	IStartGame
} from "../types/actionsTypes";
import {
	AUTOPLAY_MEMORY,
	AUTOPLAY_STEP,
	CLEAR_FLIPPED_CARDS,
	CLOSE_ALL_CARDS,
	CLOSE_CARD,
	FINISH_GAME,
	FLIP_CARD,
	MUTE_SOUND,
	PAIRS_FOUND,
	RELOADED_STATE,
	SET_CARDS,
	SET_FLIPPED_CARD,
	SET_SETTINGS,
	START_GAME
} from "./const";
import {IGameCard, ISettings, IStat, IState} from "../types/reducerTypes";


export const setCards = (payload: IGameCard[]): ISetCards => ({type: SET_CARDS, payload})
export const flipCard = (payload: number): IFlipCard => ({type: FLIP_CARD, payload})
export const closeCard = (payload: number): ICloseCard => ({type: CLOSE_CARD, payload})
export const setFlippedCard = (payload: IGameCard): ISetFlippedCard => ({type: SET_FLIPPED_CARD, payload})
export const clearFlippedCards = (): IClearFlippedCards => ({type: CLEAR_FLIPPED_CARDS})
export const closeAllCards = (): ICloseAllCards => ({type: CLOSE_ALL_CARDS})
export const startGame = (): IStartGame => ({type: START_GAME})
export const finishGame = (payload: IStat): IFinishGame => ({type: FINISH_GAME, payload})
export const setSettings = (payload: ISettings): ISetSettings => ({type: SET_SETTINGS, payload})
export const pairsFoundAC = (payload: number): IPairsFound => ({type: PAIRS_FOUND, payload})
export const muteSoundAC = (): IMuteSound => ({type: MUTE_SOUND})
export const autoplayMemory = (payload: IGameCard): IAutoplayMemory => ({type: AUTOPLAY_MEMORY, payload})
export const autoplayStep = (payload: number): IAutoplayStep => ({type: AUTOPLAY_STEP, payload})
export const reloadedStateAC = (payload: IState): IReloadedState => ({type: RELOADED_STATE, payload})
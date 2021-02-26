import {
    CLEAR_FLIPPED_CARDS,
    CLOSE_ALL_CARDS,
    CLOSE_CARD,
    FINISH_GAME,
    FLIP_CARD,
    PAIRS_FOUND,
    SET_CARDS,
    SET_FLIPPED_CARD,
    SET_SETTINGS,
    START_GAME
} from "./const";
import {IState} from "../types/reducerTypes";
import {AllActionTypes} from "../types/actionsTypes";


const initialState: IState = {
    cards: [
        "clubs_10.jpg", "clubs_2.jpg", "clubs_3.jpg", "clubs_4.jpg", "clubs_5.jpg",
        "clubs_6.jpg", "clubs_7.jpg", "clubs_8.jpg", "clubs_9.jpg", "clubs_A.jpg",
        "clubs_J.jpg", "clubs_K.jpg", "clubs_Q.jpg",
        "diamonds_10.jpg", "diamonds_2.jpg", "diamonds_3.jpg", "diamonds_4.jpg",
        "diamonds_5.jpg", "diamonds_6.jpg", "diamonds_7.jpg", "diamonds_8.jpg",
        "diamonds_9.jpg", "diamonds_A.jpg", "diamonds_J.jpg", "diamonds_K.jpg",
        "diamonds_Q.jpg",
        "hearts_10.jpg", "hearts_2.jpg", "hearts_3.jpg", "hearts_4.jpg",
        "hearts_5.jpg", "hearts_6.jpg", "hearts_7.jpg", "hearts_8.jpg",
        "hearts_9.jpg", "hearts_A.jpg", "hearts_J.jpg", "hearts_K.jpg",
        "hearts_Q.jpg",
        "spades_10.jpg", "spades_2.jpg", "spades_3.jpg", "spades_4.jpg",
        "spades_5.jpg", "spades_6.jpg", "spades_7.jpg", "spades_8.jpg",
        "spades_9.jpg", "spades_A.jpg", "spades_J.jpg", "spades_K.jpg",
        "spades_Q.jpg"
    ],
    gameCards: [],
    flippedCards: [],
    pairsFound: 0,
    isStarted: false,
    isFinished: false,
    settings: {
        musicVolume: 1,
        soundsVolume: 1,
        gameMode: 0,
        speed: 2000,
        showCards: false,
    },
    stat: [],
    count: 0
}

const reducer = (state = initialState, action: AllActionTypes): IState => {
    switch (action.type) {
        case SET_CARDS: {
            return {
                ...state,
                gameCards: action.payload,
                isFinished: false
            }
        }
        case SET_SETTINGS: {
            return {
                ...state,
                settings: {
                    musicVolume: action.payload.musicVolume,
                    soundsVolume: action.payload.soundsVolume,
                    gameMode: action.payload.gameMode,
                    speed: action.payload.speed,
                    showCards: action.payload.showCards
                }
            }
        }
        case START_GAME: {
            return {
                ...state,
                isStarted: true,
                isFinished: false,
                count: 0
            }
        }
        case FINISH_GAME: {
            return {
                ...state,
                isStarted: false,
                isFinished: true,
                pairsFound: 0,
                stat: [...state.stat, action.payload]
            }
        }
        case PAIRS_FOUND: {
            return {
                ...state,
                pairsFound: action.payload
            }
        }
        case FLIP_CARD: {
            return {
                ...state,
                gameCards: state.gameCards.map(card => {
                    if (card.id === action.payload) {
                        return {
                            ...card,
                            isFlipped: true
                        }
                    }
                    return card
                }),
                count: state.count + 1
            }
        }
        case CLOSE_CARD: {
            return {
                ...state,
                gameCards: state.gameCards.map(card => {
                    if (card.id === action.payload) {
                        return {
                            ...card,
                            isFlipped: false
                        }
                    }
                    return card
                })
            }
        }
        case SET_FLIPPED_CARD: {
            return {
                ...state,
                flippedCards: [...state.flippedCards, action.payload]
            }
        }
        case CLEAR_FLIPPED_CARDS: {
            return {
                ...state,
                flippedCards: []
            }
        }
        case CLOSE_ALL_CARDS:
            return {
                ...state,
                gameCards: state.gameCards.map(card => {
                    return {
                        ...card,
                        isFlipped: false
                    }
                })
            }
        default:
            return {
                ...state
            }

    }
}


export default reducer
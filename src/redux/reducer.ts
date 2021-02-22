import {SET_CARDS} from "./const";
import {IState} from "../types/reducerTypes";
import {shuffleArray} from '../utils/shuffleArray'
import {AllActionTypes} from "../types/actionsTypes";


const initialState: IState = {
    cards: [
        'aila.png', 'akame.png', 'aqua.png', 'asuna.png', 'beatriss.png',
        'cc.png', 'darkness.png', 'emiliya.png', 'eren.png', 'hickigaya.png',
        'julis.png', 'kaneki.png', 'kirito.png', 'kproject.png', 'kurisu.png',
        'lelouch.png', 'levi.png', 'megymin.png', 'mikasa.png', 'ram.png',
        'rem.png', 'rintarou.png', 'ryuk.png', 'sakuraso.png', 'violet.png',
        'yato.png', 'yuki.png', 'yukino.png', 'yumeko.png', 'zerotwo.png',
    ],
    gameCards: [],
    isStarted: false,
    isFinished: false,
    currentTry: 0,
    lastTry: 0,
    bestTry: 0,
    allTry: []

}

const reducer = (state = initialState, action: AllActionTypes):IState => {
    switch (action.type) {
        case SET_CARDS: {
            let pairCount = 18;
            let oldCards = shuffleArray(state.cards).slice(0, pairCount)
            const cards = shuffleArray([...oldCards, ...oldCards]).map((imageUrl, index) => ({
                id: index,
                imageUrl,
                isFlipped: true,
            }))
            return {
                ...state,
                gameCards: cards,
                isFinished: false
            }
        }
        default:
            return {
                ...state
            }

    }
}


export default reducer
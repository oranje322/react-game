import { SET_CARDS } from "./const";
import {IInitialState} from "./reduxTypes";




const initialState: IInitialState = {
    cards: [
        'aila.png', 'akame.png', 'aqua.png', 'asuna.png', 'beatriss.png',
        'cc.png', 'darkness.png', 'emiliya.png', 'eren.png', 'hickigaya.png',
        'julis.png', 'kaneki.png', 'kirito.png', 'kproject.png', 'kurisu.png',
        'lelouch.png', 'levi.png', 'megymin.png', 'mikasa.png', 'ram.png',
        'rem.png', 'rintarou.png', 'ryuk.png', 'sakuraso.png', 'violet.png',
        'yato.png', 'yuki.png', 'yukino.png', 'yumeko.png', 'zerotwo.png',
    ]
}

const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SET_CARDS: {
            return {
                ...state,

            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export default reducer
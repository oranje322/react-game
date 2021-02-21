import { SET_CARDS } from "./const";
import {IInitialState} from "./reduxTypes";




const initialState: IInitialState = {
    cards: []
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
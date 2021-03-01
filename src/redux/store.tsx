import {applyMiddleware, compose, createStore, Store} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import {IState} from "../types/reducerTypes";
import {AllActionTypes} from "../types/actionsTypes";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => (
	createStore(
		reducer,
		composeEnhancers(
			applyMiddleware(thunk)
		)
	)
)

const store: Store<IState, AllActionTypes> = configureStore()

export default store
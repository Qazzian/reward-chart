import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

export default function createStoreFromState(appState, initialState) {
	return createStore(appState, initialState, applyMiddleware(thunkMiddleware));
}

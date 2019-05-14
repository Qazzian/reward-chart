import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

const DEV_MODE = true;

export default function createStoreFromState(appState, initialState) {
	let composeEnhancers = compose;
	const middleWare = [
		thunkMiddleware,
	];

	if (DEV_MODE && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	}

	return createStore(appState, initialState, composeEnhancers(applyMiddleware(...middleWare)));
}

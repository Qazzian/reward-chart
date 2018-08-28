import {createStore} from 'redux';

export default function createstoreFromState(appState) {
	return createStore(appState);
}

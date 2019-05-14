import {createStore} from 'redux';

import AppState from './AppState';


function createStoreFromState(initialState) {
	return createStore(AppState, initialState);
}


describe('AppState intigration tests', () => {

	it('Defines correct initial state', () => {
		expect(AppState).toBeDefined();
		expect(AppState()).toMatchSnapshot();
	});
	
	xit('deal with updates correctly', () => {
		const initState = {"charts":[{"name":"Chart 1"},{"name":"Chart 2"}]};
		const store = createStoreFromState();
		store.dispatch(AppState.addChart({name: 'Chart 1', id: 1}))
		expect(store.getState()).toMatchSnapshot();
		store.dispatch(AppState.chartHappy({id: 1}, new Date('2018-12-10')));

		//expect(store.getState()).toMatchSnapshot();
	});

	it('getLastXEmotes returns the correct list of emotes', function () {
		const initState = AppState();
		stoere

	});
});


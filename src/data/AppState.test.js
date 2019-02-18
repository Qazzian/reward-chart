import {createStore} from 'redux';

import AppState from './AppState';
import * as chartActions from "./ChartActions";


function createStoreFromState(initialState) {
	return createStore(AppState, initialState);
}


xdescribe('AppState intigration tests', () => {

	it('Defines correct initial state', () => {
		expect(AppState).toBeDefined();
		expect(AppState()).toMatchSnapshot();
	});
	
	it('deal with updates correctly', () => {
		const initState = {"charts":[{"name":"Chart 1"},{"name":"Chart 2"}]};
		const store = createStoreFromState();
		store.dispatch(chartActions.addChart({name: 'Chart 1', id: 1}))
		expect(store.getState()).toMatchSnapshot();
		store.dispatch(chartActions.chartHappy({id: 1}, new Date('2018-12-10')));

		//expect(store.getState()).toMatchSnapshot();
	});
});


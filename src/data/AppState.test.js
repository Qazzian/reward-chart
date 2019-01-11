import {createStore} from 'redux';

import AppState from './AppState';
import * as chartActions from "./ChartActions";


function createStoreFromState(initialState) {
	return createStore(AppState, initialState);
}


describe('AppState intigration tets', () => {
	
	it('deal with updates correctly', () => {
		const initState = {"charts":[{"name":"Chart 1"},{"name":"Chart 2"}]};
		const store = createStoreFromState(initState);
		store.dispatch(chartActions.chartHappy({name: "Chart 1"}, new Date('2018-12-10')));

		expect(store.getState()).toMatchSnapshot();


		
	});

});


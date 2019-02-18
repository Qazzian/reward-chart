import { combineReducers } from 'redux';
import * as fromCharts from './charts';

const AppState = combineReducers({
	charts: fromCharts.charts,
});

export default AppState

export const getAllCharts = (state) => 
	fromCharts.getAllCharts(state.charts)

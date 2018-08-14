import { combineReducers } from 'redux';
import ChartState from './ChartState';

const todoApp = combineReducers({
	charts: ChartState,
});

export default todoApp

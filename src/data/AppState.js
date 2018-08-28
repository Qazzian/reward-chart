import { combineReducers } from 'redux';
import ChartState from './ChartState';

const AppState = combineReducers({
	charts: ChartState,
});

export default AppState

import { combineReducers } from 'redux';
import * as fromCharts from './charts';
import * as fromEmotes from './emotes';

const AppState = combineReducers({
	charts: fromCharts.charts,
	emotes: fromEmotes.emotes,
});

export default AppState

export const getAllCharts = (state) => {
	console.info('AppState.getAllCharts: ', state);
	return fromCharts.getAllCharts(state.charts);
}

export const getEmote = (state, emoteId) =>
	fromEmotes.getEmoteById(state.emotes, emoteId);

export const addChart = fromCharts.addChart;

export const addEmote = fromEmotes.addEmote;

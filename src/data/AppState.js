import { combineReducers } from 'redux';
import * as fromCharts from './charts';
import * as fromEmotes from './emotes';

// State

const AppState = combineReducers({
	charts: fromCharts.charts,
	emotes: fromEmotes.emotes,
});

export default AppState;


// Accessors

export const getAllCharts = (state) =>
	fromCharts.getAllCharts(state.charts);

export const getEmote = (state, emoteId) =>
	fromEmotes.getEmoteById(state.emotes, emoteId);

export const getEmoteList = (state, emoteIds) =>
	fromEmotes.getEmotesByIdList(state.emotes, emoteIds);


// Actions

export const addChart = fromCharts.addChart;

export function dispatchAddHappy(dispatch, chartId, date=Date()) {
	const emoteId = fromEmotes.generateKey(chartId, date);
	dispatch(fromEmotes.addEmote(chartId, date, fromEmotes.EMOTE_TYPES.HAPPY));
	dispatch(fromCharts.chartAddEmote(chartId, emoteId));
}

export function dispatchAddSad(dispatch, chartId, date=Date()) {
	const emoteId = fromEmotes.generateKey(chartId, date);
	dispatch(fromEmotes.addEmote(chartId, date, fromEmotes.EMOTE_TYPES.SAD));
	dispatch(fromCharts.chartAddEmote(chartId, emoteId));
}

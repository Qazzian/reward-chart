import { combineReducers } from 'redux';
import * as fromCharts from './charts';
import * as fromEmotes from './emotes';

import {toEmoteDateString, loopOverDays} from '../util/date';

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

export const getLastXEmotes = (state, chart, limit) => {
	const emoteList = fromEmotes.getEmotesByIdList(state.emotes, chart.emotes);
	const emoteStore = emoteList.reduce((obj, emote) => ({
		...obj,
		[emote.emoteId]: emote,
	}), {});
	let dayList = [];
	loopOverDays(limit, (date) => {
		const emoteDateStr = toEmoteDateString(date);
		const currentKey = fromEmotes.generateKey(chart.id, emoteDateStr);
		dayList.push(currentKey in emoteStore ? emoteStore[currentKey] : {date: emoteDateStr});
	});
	return dayList;
};

// Actions

export function dispatchAddHappy(dispatch, chartId, date=(new Date())) {
	dispatchAddEmote(dispatch, chartId, date, fromEmotes.EMOTE_TYPES.HAPPY);
}

export function dispatchAddSad(dispatch, chartId, date=(new Date())) {
	dispatchAddEmote(dispatch, chartId, date, fromEmotes.EMOTE_TYPES.SAD);
}

function dispatchAddEmote(dispatch, chartId, date, emoteType) {

	const dateString = toEmoteDateString(date);

	const emoteId = fromEmotes.generateKey(chartId, dateString);
	dispatch(fromEmotes.addEmote(chartId, dateString, emoteType));
	dispatch(fromCharts.chartAddEmote(chartId, emoteId));
}

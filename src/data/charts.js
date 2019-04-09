import { combineReducers } from 'redux';

import {chart} from './chart';


const chartActionTypes = {
	CHART_ADD: 'CHART_ADD',
	CHART_REMOVE: 'CHART_REMOVE',
	CHART_ADD_EMOTE: 'CHART_ADD_EMOTE',
	CHART_REMOVE_EMOTE: 'CHART_ADD_EMOTE',
};

function validateAction(action) {
	if (!action.id) {
		throw new Error(`Action doesn't have a valid id`);
	}
}

// State reducers
const chartsById = (state = {}, action = {}) => {
	switch (action.type) {
		case chartActionTypes.CHART_ADD:
			validateAction(action);
			if (chartExists(state, action.id)) {
				throw new Error(`Chart ID '${action.id}' already exists`);
			}
			return {
				...state,
				[action.id]: chart(state[action.id], action),
			};
		case chartActionTypes.CHART_REMOVE:
			validateAction(action);
			return Object.keys(state).reduce((newState, chartId) => {
				if (parseInt(chartId, 10) !== action.id) {
					newState[chartId] = state[chartId];
				}
				return newState;
			}, {});
		case chartActionTypes.CHART_ADD_EMOTE:
		case chartActionTypes.CHART_REMOVE_EMOTE:
			return {
				...state,
				[action.chartId]: chart(state[action.chartId], action),
			};
		default:
			return state;
	}
};

const allIds = (state=[], action={}) => {
	switch(action.type) {
		case chartActionTypes.CHART_ADD:
			validateAction(action);
			return [
				...state,
				action.id,
			];
		case chartActionTypes.CHART_REMOVE:
			validateAction(action);
			return state.filter((chartId) => {
				return chartId !== action.id;
			});
		default:
			return state;
	}
};

const DEFAULT_STATE = {
	allIds: allIds(),
	chartsById: chartsById(),
	nextId: 1,
};


export const charts = (state, action) => {
	let newAction = {...action};
	let newState = {
		...DEFAULT_STATE,
		...state,
	};

	if (action && action.type === chartActionTypes.CHART_ADD && !action.id) {
		newAction.id = newState.nextId;
		newState.nextId += 1;
	}

	return {
		...newState,
		chartsById: chartsById(newState.chartsById, action && newAction),
		allIds: allIds(newState.allIds, action && newAction),
	};
};


// State queries
export const getAllCharts = (state) => {
	if (!state || !state.allIds.length) {
		return [];
	}
	const allCharts = state.allIds.map(id => {
		return state.chartsById[id];
	});
	return allCharts;
};

export function chartExists(state, chartId) {
	return state.chartsById && state.chartsById.hasOwnProperty(chartId);
}

export const getChartById = (state, id) => {
	if (!state || !state.chartsById) {
		return {};
	}
	return state.chartsById[id];
};


// State Actions
export const addChart = ({id, name}) => {
	return {
		type: chartActionTypes.CHART_ADD,
		name,
		id,
	};
};

export const removeChart = (id) => ({
	type: chartActionTypes.CHART_REMOVE,
	id,
});

export const chartAddEmote = (chartId, emoteId) => ({
	type: chartActionTypes.CHART_ADD_EMOTE,
	chartId,
	emoteId,
});

export const chartRemoveEmote = (chartId, emoteId) => ({
	type: chartActionTypes.CHART_REMOVE_EMOTE,
	chartId,
	emoteId,
});

import { combineReducers } from 'redux';

import {chart} from './chart';


const chartActionTypes = {
	CHART_ADD: 'CHART_ADD',
	CHART_REMOVE: 'CHART_REMOVE',
	CHART_HAPPY: 'CHART_HAPPY',
	CHART_SAD: 'CHART_SAD',
};

// State reducers
const chartsById = (state={}, action={}) => {
	switch (action.type) {
    case chartActionTypes.CHART_ADD:
		case chartActionTypes.CHART_HAPPY:
    case chartActionTypes.CHART_SAD:
			return {
				...state,
				[action.id]: chart(state[action.id], action),
			};
		case chartActionTypes.CHART_REMOVE:
			return {
				...state,
				[action.id]: undefined,
			}
		default:
				return state;
  }
};

const allIds = (state=[], action={}) => {
	switch(action.type) {
		case chartActionTypes.CHART_ADD:
			return [
				...state,
				action.id,
			];
		case chartActionTypes.CHART_REMOVE: 
			return state.filter((chartId) => {
				return chartId !== action.id;
			})
		default:
			return state;
	}
};

export const charts = combineReducers({
	chartsById,
	allIds,
});

// State queries
export const  getAllCharts = (state) => {
	if (!state || !state.allIds) { 
		return []; 
	}
	return state.allIds.map(id => state.chartsById[id]);
};

export function chartExists(state, chartId) {
	return !!getChartById(state, chartId);
}

export const getChartById = (state, id) => {
	if (!state || !state.chartsById) {
		return {};
	}
	return state.chartsById[id];
};


// State Actions
export const addChart = (id, name) => ({
	type: chartActionTypes.CHART_ADD,
	name,
	id,
});

export const removeChart = (id) => ({
	type: chartActionTypes.CHART_REMOVE,
	id,
});

export const chartHappy = (id, date) => ({
	type: chartActionTypes.CHART_HAPPY,
	id,
	date,
});

export const chartSad = (id, date) => ({
	type: chartActionTypes.CHART_SAD,
	id,
	date,
});
import { combineReducers } from 'redux';

import {chart} from './chart';


const chartActionTypes = {
	CHART_ADD: 'CHART_ADD',
	CHART_REMOVE: 'CHART_REMOVE',
	CHART_HAPPY: 'CHART_HAPPY',
	CHART_SAD: 'CHART_SAD',
};

// State reducers
const chartsById = (state = {}, action = {}) => {
	if (!action.id) {
		throw new Error(`Action doesn't have a valid id`);
	}

	switch (action.type) {
		case chartActionTypes.CHART_ADD:
			if (chartExists(state, action.id)) {
				throw new Error(`Chart ID '${action.id}' already exists`);
			}
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
			};
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
			});
		default:
			return state;
	}
};

const nextChartId = (state=1, action={}) => {
	switch(action.type) {
		case chartActionTypes.CHART_ADD:
			// TODO
	}
}

export const charts = (state, action={}) => {

	let newState = Object.assign({}, state);
	let newAction = Object.assign({}, action);

	if (!newState) {
		newState = {
			allIds: allIds(),
			chartsById: chartsById(),
			nextId: 1,
		}
	}
	if (!newState.nextId) {
		newState.nextId = 1;
	}

	if (!action.id) {
		newAction.id = newState.nextId;
	}
	newState.nextId = newState.nextId <= newAction.id ? newAction.id + 1 : newState.nextId;
	newState.chartsById = chartsById(newState.chartsById, newAction);
	newState.allIds = allIds(newState.allIds, newAction);

	return newState;

}


// State queries
export const getAllCharts = (state) => {
	console.info('GETTING ALL CHARTS: ', state);
	if (!state || !state.allIds.length) {
		return [];
	}
	const allCharts = state.allIds.map(id => {
		console.info('found chart:', id, state.chartsById[id]);
		return state.chartsById[id];
	});
	console.info('ALL CHARTS: ', allCharts);
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

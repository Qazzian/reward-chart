import {loadData, saveData} from './LocalStorage';

export const
	CHART_LOAD_REQUEST = 'CHART_LOAD_REQUEST',
	CHART_LOAD_RECEIVE = 'CHART_LOAD_RECEIVE',
	CHART_SAVE_REQUEST = 'CHART_SAVE_REQUEST',
	CHART_SAVE_COMPLETE = 'CHART_SAVE_COMPLETE',
	CHART_ADD = 'CHART_ADD',
	CHART_REMOVE = 'CHART_REMOVE',
	CHART_HAPPY = 'CHART_HAPPY',
	CHART_SAD = 'CHART_SAD';

export function requestChartLoad() {
	return {
		type: CHART_LOAD_REQUEST,
	}
}

export function receiveChartLoad(chartState) {
	return {
		type: CHART_LOAD_RECEIVE,
		data: chartState
	}
}

export function requestChartSave() {
	return {
		type: 'CHART_SAVE_REQUEST'
	}
}

export function completeChartSave() {
	return {
		type: 'CHART_SAVE_COMPLETE'
	}
}

export function addChart(chartData) {
	return {
		type: CHART_ADD,
		data: chartData,
	};
}

export function removeChart(chart) {
	return {
		type: CHART_REMOVE,
		data: chart,
	};
}

export function chartHappy(chart, date) {
	return {
		type: CHART_HAPPY,
		data: chart,
		date: date,
	};
}

export function chartSad(chart, date) {
	return {
		type: CHART_SAD,
		data: chart,
		date: date,
	};
}

export function fetchChartData() {
	return dispatch => {
		dispatch(requestChartLoad());
		return loadData()
			.then(response => dispatch(receiveChartLoad(response)));
	}
}

export function saveChartData(chartSate) {
	return dispatch => {
		dispatch(requestChartSave());
		return saveData(chartSate)
			.then(() => dispatch(completeChartSave()));
	}
}

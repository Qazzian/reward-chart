import {loadData, saveData} from './LocalStorage';

export const
	CHART_LOAD_REQUEST = 'CHART_LOAD_REQUEST',
	CHART_LOAD_RECEIVE = 'CHART_LOAD_RECEIVE',
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

export function addChart(chartData) {
	return {
		type: CHART_ADD,
		data: chartData,
	};
}

export function removeChart(chartId) {
	return {
		type: CHART_REMOVE,
		id: chartId,
	};
}

export function chartHappy(chartId, date = Date.now()) {
	console.info('Happy click', chartId);
	return {
		type: CHART_HAPPY,
		id: chartId,
		date: date,
	};
}

export function chartSad(chartId, date = Date.now()) {
	console.info('Sad click', chartId);
	return {
		type: CHART_SAD,
		id: chartId,
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

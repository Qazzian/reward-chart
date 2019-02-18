import {loadData, saveData} from './LocalStorage';


export const requestChartLoad = () => ({
	type: CHART_LOAD_REQUEST,
});

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

export function addChart(chartId) {
	return {
		type: CHART_ADD,
		id: chartId,
	};
}

export function removeChart(chartId) {
	return {
		type: CHART_REMOVE,
		id: chartId,
	};
}

export function chartHappy(chartId, date) {
	return {
		type: CHART_HAPPY,
		id: chartId,
		date: date,
	};
}

export function chartSad(chartId, date) {
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

export function saveChartData(chartSate) {
	return dispatch => {
		dispatch(requestChartSave());
		return saveData(chartSate)
			.then(() => dispatch(completeChartSave()));
	}
}

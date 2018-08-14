export const ADD_CHART = 'ADD_CHART',
	REMOVE_CHART = 'REMOVE_CHART';

export function addChart(chartData) {
	return {
		type: ADD_CHART,
		data: chartData,
	};
}

export function removeChart(chartId) {
	return {
		type: REMOVE_CHART,
		id: chartId,
	};
}



import * as chartActions from "./ChartActions";

const initialState = [
	{
		id: 123,
		name: 'Lydia\'s Bed time',
		currentStreak: 2,
		bestStreak: 4,
	}
];

export default function ChartState(state = initialState, action = {}) {
	switch (action.type) {
		case chartActions.CHART_ADD:
			return addChart(state, action.data);
		case chartActions.CHART_REMOVE:
			return removeChart(state, action.id);
		default:
			return state;
	}
}

function addChart(chartList, newChart) {
	console.info('Adding chart to state: ', newChart);
	return chartList.slice().concat(Object.assign({}, newChart));
}

function removeChart(chartList, chartId) {
	return chartList.filter((chart) => {
		return chart.id !== chartId;
	})
}

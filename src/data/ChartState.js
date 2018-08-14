import * as chartActions from "./ChartActions";

const initialState = [];

export default function ChartState(state = initialState, action = {}) {
	switch (action.type) {
		case chartActions.ADD_CHART:
			return addChart(state, action.data);
		case chartActions.REMOVE_CHART:
			return removeChart(state, action.id);
		default:
			return state;
	}
}

function addChart(chartList, newChart) {
	return chartList.slice().concat(Object.assign({}, newChart));
}

function removeChart(chartList, chartId) {
	return chartList.filter((chart) => {
		return chart.id !== chartId;
	})
}

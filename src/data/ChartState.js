import * as chartActions from "./ChartActions";

const initialState = [];

export default function ChartState(state = initialState, action = {}) {
	switch (action.type) {
		case chartActions.CHART_ADD:
			return addChart(state, action.data);
		case chartActions.CHART_REMOVE:
			return removeChart(state, action.id);
		case chartActions.CHART_HAPPY:
			return addHappy(state, action.id, action.date);
		case chartActions.CHART_SAD:
			return addSad(state, action.id, action.date);
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

function addHappy(chartList, chartId, date) {
	return addEmote(chartList, chartId, date, 'HAPPY');
}


function addSad(chartList, chartId, date) {
	return addEmote(chartList, chartId, date, 'SAD');
}

function addEmote(chartList, chartId, date, emote) {
	return chartList.map((chart) => {
		if (chart.id === chartId) {
			return addEmoteToChart(chart, date, emote);
		}
		return chart;
	});
}

function addEmoteToChart(chart, date, emote) {
	console.info('addEmoteToChart args: ', chart, date, emote);
	const newEmote = {date, emote};
	return Object.assign({}, chart, {
		emotes: [newEmote]
	});
}

import * as chartActions from "./ChartActions";

// export const transformState = (state=[]) => {
// 	if (!(state instanceof Array)) {
// 		return state;
// 	}
//
// 	const transformedState = state.reduce((state, chartObj, index) => {
// 		return charts(state, {
// 			...chartObj,
// 			type: chartActions.CHART_ADD,
// 			id: index+1,
// 		});
// 	}, charts());
//
// 	return transformedState;
// };

export default function ChartState(state = [], action = {}) {
	switch (action.type) {
		case chartActions.CHART_ADD:
			return addChart(state, action.data);
		case chartActions.CHART_REMOVE:
			return removeChart(state, action.data);
		case chartActions.CHART_HAPPY:
			return addHappy(state, action.data, action.date);
		case chartActions.CHART_SAD:
			return addSad(state, action.data, action.date);
		default:
			return state;
	}
}


function addChart(chartList, newChart) {
	if (chartExists(chartList, newChart.name)) {
		return chartList;
	}
	return chartList.slice().concat(Object.assign({}, newChart));
}


function removeChart(chartList, chart) {
	return chartList.filter(oldChart => {
		return oldChart.name !== chart.name;
	});
}

function addHappy(chartList, chart, date) {
	return addEmote(chartList, chart, date, "HAPPY");
}

function addSad(chartList, chart, date) {
	return addEmote(chartList, chart, date, "SAD");
}

function addEmote(chartList, chart, date = new Date(), emote) {
	return chartList.map(oldChart => {
		if (oldChart.name === chart.name) {
			return addEmoteToChart(oldChart, date, emote);
		}
		return oldChart;
	});
}

function addEmoteToChart(chart, date, emote) {
	const newEmote = {
		date,
		emote
	};

	let processed = false;
	const oldEmotes = chart.emotes || [];

	const newEmotes = oldEmotes.reduce((newEmoteList, currentEmote) => {
		if (isSameDay(currentEmote.date, newEmote.date)) {
			newEmoteList.push(newEmote);
			processed = true;
		}
		else {
			newEmoteList.push(currentEmote);
		}
		return newEmoteList;
	}, []);

	if (!processed) {
		newEmotes.push(newEmote);
	}
	return Object.assign({}, chart, {
		emotes: newEmotes,
	});
}

function isSameDay(date1, date2) {
	return ['getDate', 'getMonth', 'getFullYear'].reduce((isEqual, currentTest) => {
		return isEqual && date1[currentTest]() === date2[currentTest]();
	}, true);
}

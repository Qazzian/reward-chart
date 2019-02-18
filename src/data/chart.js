const actionTypes = {
	CHART_ADD: 'CHART_ADD',
	CHART_HAPPY: 'CHART_HAPPY',
	CHART_SAD: 'CHART_SAD',
};

export function chart(chart={}, action={}) {
	switch (action.type) {
		case actionTypes.CHART_ADD:
			const {type, ...newChart} = action;
			return {
				...chart,
				...newChart,
			};
		case actionTypes.CHART_HAPPY:
			return chart;
		case actionTypes.CHART_SAD:
			return chart;
		default:
			return chart;
	}
}

export const chartAdd = (id, name) => ({
	type: actionTypes.CHART_ADD,
	id,
	name,
});

export const chartHappy = (date) => ({
	type: actionTypes.CHART_HAPPY,
	date,
});

export const chartSad = (date) => ({
	type: actionTypes.CHART_SAD,
	date,
});
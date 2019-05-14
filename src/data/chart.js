
const actionTypes = {
	CHART_ADD: 'CHART_ADD',
	CHART_ADD_EMOTE: 'CHART_ADD_EMOTE',
	CHART_REMOVE_EMOTE: 'CHART_REMOVE_EMOTE',
	CHART_UPDATE_EMOTE: 'CHART_UPDATE_EMOTE',
};

const EMPTY_CHART = {
	name: '',
	emotes: [],
};

export function chart(chart={}, action={}) {
	switch (action.type) {
		case actionTypes.CHART_ADD:
			const {type, ...newChart} = action;
			return {
				...EMPTY_CHART,
				...chart,
				...newChart,
			};
		case actionTypes.CHART_ADD_EMOTE:
			if (hasEmote(chart, action.emoteId)) {
				return chart;
			}
			return {
				...chart,
				emotes: [
					...chart.emotes,
					action.emoteId,
				],
			};
		case actionTypes.CHART_REMOVE_EMOTE:
			return {
				...chart,
				emotes: chart.emotes.filter((currentEmote) => {
					return currentEmote !== action.emoteId;
				})
			};
		default:
			return chart;
	}
}

export function hasEmote(state, emoteId) {
	return state.emotes && !!(state.emotes.find((currentEmoteId) => {
		return currentEmoteId === emoteId;
	}));
}


export const chartAdd = (id, name) => ({
	type: actionTypes.CHART_ADD,
	id,
	name,
	emotes: [],
});

export const addEmote = (emoteId) => ({
	type: actionTypes.CHART_ADD_EMOTE,
	emoteId,
});

export const removeEmote = (emoteId) => ({
	type: actionTypes.CHART_REMOVE_EMOTE,
	emoteId,
});

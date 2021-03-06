import {combineReducers} from 'redux';
import {toEmoteDateString} from "../util/date";

const actionTypes = {
	EMOTE_ADD: 'EMOTE_ADD',
	EMOTE_REMOVE: 'EMOTE_REMOVE',
	EMOTE_UPDATE: 'EMOTE_UPDATE',
};

export const EMOTE_TYPES = {
	HAPPY: 'HAPPY',
	SAD: 'SAD',
};

function emotesById(state = {}, action = {}) {
	switch (action.type) {
		case actionTypes.EMOTE_ADD:
			const newKey = generateKey(action.chartId, action.date);
			return {
				...state,
				[newKey]: emote(state[newKey], action),
			};
		case actionTypes.EMOTE_REMOVE:
			const newState = {...state};
			delete newState[action.emoteId];
			return newState;
		case actionTypes.EMOTE_UPDATE:
			return {
				...state,
				[action.emoteId]: emote(state[action.emoteId], action),
			};
		default:
			return state;
	}
}

function allIds(state = [], action = {}) {
	switch (action.type) {
		case actionTypes.EMOTE_ADD:
			return [
				...state,
				generateKey(action.chartId, action.date),
			];
		case actionTypes.EMOTE_REMOVE:
			return state.filter((emoteId) => {
				return emoteId !== action.emoteId;
			});
		default:
			return state;
	}
}

export const emotes = combineReducers({
	emotesById,
	allIds,
});

function emote(state = {}, action = {}) {
	const {type, ...actionData} = action;

	const newEmote = {
		...state,
		...actionData,
	};

	if (!newEmote.chartId || !newEmote.date) {
		throw new Error('Emotes need a chartId and a date string');
	}

	newEmote.date = validateDate(newEmote.date);

	const emoteId = newEmote.emoteId || generateKey(newEmote.chartId, newEmote.date);
	return {
		...newEmote,
		emoteId,
	};
}

function validateDate(date) {
	if (date instanceof Date) {
		return toEmoteDateString(date);
	}
	// TODO finish me
	return date;
}

// Accessors

export function generateKey(chartId, emoteDate) {
	return `${chartId}_${emoteDate}`;
}

export function getEmoteById(state = {}, emoteId) {
	if (state.emotesById) {
		return state.emotesById[emoteId];
	}
	return undefined;
}

export function getEmotesByIdList(state = {}, idList = []) {
	return idList.map((emoteId) => {
		return state.emotesById[emoteId];
	})
}

// Actions

export function addEmote(chartId, date, emoteType) {
	return {
		type: actionTypes.EMOTE_ADD,
		chartId,
		date,
		emoteType,
	}
}

export function updateEmote(emoteId, emoteType) {
	return {
		type: actionTypes.EMOTE_UPDATE,
		emoteId,
		emoteType,
	};
}

export function removeEmote(emoteId) {
	return {
		type: actionTypes.EMOTE_REMOVE,
		emoteId,
	};
}

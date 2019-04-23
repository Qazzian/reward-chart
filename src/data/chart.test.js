import * as fromChart from './chart';

const chart = fromChart.chart;

describe('Chart State', () => {

	it('should create an empty chart by default', function () {
		expect(chart()).toMatchObject({});
	});

	it('should create chart from new data', () => {
		const action = fromChart.chartAdd(1, 'test1');
		const expected = {
			name: 'test1',
			id: 1,
			emotes: [],
		};

		expect(chart({}, action)).toMatchObject(expected);
	});

	it('should add emotes', function () {
		const start = chart({}, fromChart.chartAdd(1, 'test1'));
		const action = fromChart.addEmote('test1_2018-12-14'),
			expected = {
				name: 'test1',
				id: 1,
				emotes: ['test1_2018-12-14'],
			};

		expect(chart(start, action)).toMatchObject(expected);

	});

	it('should remove existing emotes', function () {
		const startState = stateWithEmotes();
		const action = fromChart.removeEmote('test1_2018-12-15');
		expect(chart(startState, action)).toMatchSnapshot();
	});

	it('should know if it has an emote', function () {
		const startState = stateWithEmotes();
		expect(fromChart.hasEmote(startState, 'test1_2018-12-14')).toBe(true);
		expect(fromChart.hasEmote(startState, 'test1_2018-12-01')).toBe(false);
	});
});


function stateWithEmotes() {
	const emoteIds = [
		'test1_2018-12-14', 'test1_2018-12-15', 'test1_2018-12-16'
	];

	const startState = chart({}, fromChart.chartAdd(1, 'test1'));
	return emoteIds.reduce((state, emoteId) => {
		return chart(state, fromChart.addEmote(emoteId));
	}, startState);
}

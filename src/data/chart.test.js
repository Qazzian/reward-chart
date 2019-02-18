import * as fromChart from './chart';

const chart = fromChart.chart;

describe('Chart State', () => {
	it('should create chart from new data', () => {
		const action = fromChart.chartAdd(1, 'test1');
		const expected = {
			name: 'test1',
			id: 1,
		};

		expect(chart({}, action)).toMatchObject(expected);
	});

	it('should add emotes', function () {
		const start = {name: 'test1', id: 1},
			action = fromChart.chartHappy('2018-12-14'),
			expected = {
				name: 'test1',
				id: 1,
				emotes: [{
					date: '2018-12-14',
					emote: 'HAPPY',
				}],
			};

		expect(chart(start, action)).toMatchObject(expected);

	});
});
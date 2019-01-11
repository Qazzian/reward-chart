import clock from 'jest-plugin-clock';

import ChartState, { chartExists } from './ChartState';
import * as ChartActions from './ChartActions';

describe('Chart State', () => {
	beforeEach(() => {
		clock.set('2018-12-06');
	});

	afterEach(() => {
	});

	it('should be defined', (done) => {
		expect(ChartState).toBeDefined();
		done();
	});

	it('should return an empty chart list by default', (done) => {
		expect(ChartState()).toMatchObject([]);
		done();
	});

	it('should add a Chart to the list', (done) => {
		const firstState = ChartState([], ChartActions.addChart({name: 123}));
		expect(firstState.length).toBe(1);
		expect(firstState[0].name).toBe(123);

		const secondState = ChartState(firstState, ChartActions.addChart({name: 987}));
		expect(secondState.length).toBe(2);
		expect(secondState[1].name).toBe(987);

		expect(firstState.length).toBe(1);
		done();
	});

	it('should ignore duplicate names', () => {
		const firstState = ChartState([], ChartActions.addChart({name: '123'}));
		expect(firstState.length).toBe(1);
		expect(firstState[0].name).toBe('123');

		const secondState = ChartState(firstState, ChartActions.addChart({name: '123'}));
		expect(secondState.length).toBe(1);
	});

	it('should Remove a chart from the list', (done) => {
		const firstState = ChartState([], ChartActions.addChart({name: 123}));
		const secondState = ChartState(firstState, ChartActions.addChart({name: 987}));
		expect(secondState.length).toBe(2);

		const thirdState = ChartState(secondState, ChartActions.removeChart({name: 987}));
		expect(thirdState.length).toBe(1);
		done();
	});

	it('should Add an emote to a chart', (done) => {
		clock.set('2018-12-14');
		const firstState = ChartState([], ChartActions.addChart({name: 123}));
		const secondState = ChartState(firstState, ChartActions.chartHappy({name: 123}));
		expect(secondState).toMatchSnapshot();
		const thirdState = ChartState(secondState, ChartActions.chartSad({name: 123}));
		expect(thirdState).toMatchSnapshot();
		done();
	});

	it('should add multiple emotes to a chart', () => {
		const firstState = ChartState([], ChartActions.addChart({name: 123}));
		const secondState = ChartState(firstState, ChartActions.chartHappy({name: 123}, new Date('2018-12-14')));
		const thirdState = ChartState(secondState, ChartActions.chartSad({name: 123}, new Date('2018-12-15')));
		const forthState = ChartState(thirdState, ChartActions.chartHappy({name: 123}, new Date('2018-12-16')));
		expect(forthState).toMatchSnapshot();
	});

	describe('Helper Functions', () => {
		test('chartExists', () => {
				const firstState = ChartState([], ChartActions.addChart({name: 123}));
				expect(chartExists(firstState, 123)).toBe(true);
		});
	});
});

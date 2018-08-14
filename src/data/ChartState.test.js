import ChartState from './ChartState';
import * as ChartActions from './ChartActions';

describe('Chart State', () => {
	beforeEach(() => {
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
		const firstState = ChartState([], ChartActions.addChart({id: 123}));
		expect(firstState.length).toBe(1);
		expect(firstState[0].id).toBe(123);

		const secondState = ChartState(firstState, ChartActions.addChart({id: 987}));
		expect(secondState.length).toBe(2);
		expect(secondState[1].id).toBe(987);

		expect(firstState.length).toBe(1);
		done();
	});

	it('should Remove a chart from the list', (done) => {
		const firstState = ChartState([], ChartActions.addChart({id: 123}));
		const secondState = ChartState(firstState, ChartActions.addChart({id: 987}));
		expect(secondState.length).toBe(2);

		const thirdState = ChartState(secondState, ChartActions.removeChart(987));
		expect(thirdState.length).toBe(1);
		done();
	});
});

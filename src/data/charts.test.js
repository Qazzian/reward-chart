import * as fromCharts from "./charts";
import clock from "jest-plugin-clock";

const charts = fromCharts.charts;

describe('charts state', function () {


	it('should be defined', (done) => {
		expect(charts).toBeDefined();
		done();
	});

	it('should return an empty chart list by default', (done) => {
		expect(charts()).toMatchSnapshot();
		done();
	});

	it('should add a Chart to the list', (done) => {
		const firstState = charts([], fromCharts.addChart({name: 'test1'}));
		const chartList1 = fromCharts.getAllCharts(firstState);
		expect(chartList1.length).toBe(1);
		expect(chartList1[0].name).toBe('test1');


		const secondState = charts(firstState, fromCharts.addChart({name: 987}));
		console.info('ChartList:', secondState);

		expect(secondState).toMatchSnapshot();
		const chartList2 = fromCharts.getAllCharts(secondState);
		expect(chartList2.length).toBe(2);
		expect(chartList2[1].name).toBe(987);

		expect(chartList1.length).toBe(1);
		done();
	});

	it('should Remove a chart from the list', (done) => {
		const firstState = charts([], fromCharts.addChart({name: 123}));
		const secondState = charts(firstState, fromCharts.addChart({name: 987}));
		expect(fromCharts.getAllCharts(secondState).length).toBe(2);

		const thirdState = charts(secondState, fromCharts.removeChart(2));
		expect(thirdState).toMatchSnapshot();
		expect(fromCharts.getAllCharts(thirdState).length).toBe(1);
		done();
	});

	it('should Add and remove emotes to a chart', (done) => {
		clock.set('2018-12-14');
		const firstState = charts([], fromCharts.addChart({name: 123}));
		const secondState = charts(firstState, fromCharts.chartAddEmote(1, 23));
		expect(secondState).toMatchSnapshot();
		const thirdState = charts(secondState, fromCharts.chartAddEmote(1, 45));
		expect(thirdState).toMatchSnapshot();
		const fourthState = charts(secondState, fromCharts.chartRemoveEmote(1, 45));
		expect(fourthState).toMatchSnapshot();
		done();
	});

	xit('should add multiple emotes to a chart', () => {
		const firstState = charts([], charts.addChart({name: 123}));
		const secondState = charts(firstState, charts.chartHappy({name: 123}, new Date('2018-12-14')));
		const thirdState = charts(secondState, charts.chartSad({name: 123}, new Date('2018-12-15')));
		const forthState = charts(thirdState, charts.chartHappy({name: 123}, new Date('2018-12-16')));
		expect(forthState).toMatchSnapshot();
	});
});

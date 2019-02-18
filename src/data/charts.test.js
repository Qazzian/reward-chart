import * as fromCharts from "./charts";
import * as ChartActions from "./ChartActions";
import ChartState from "./ChartState";
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

    xit('should add a Chart to the list', (done) => {
        const firstState = charts([], ChartActions.addChart({name: 123}));
        const chartList = fromCharts.getAllCharts(firstState);
        console.info('ChartList:', chartList);
        expect(chartList.length).toBe(1);
        expect(chartList[0].name).toBe(123);



        const secondState = ChartState(firstState, ChartActions.addChart({name: 987}));
        expect(secondState.length).toBe(2);
        expect(secondState[1].name).toBe(987);

        expect(firstState.length).toBe(1);
        done();
    });

    xit('should ignore duplicate names', () => {
        const firstState = ChartState([], ChartActions.addChart({name: '123'}));
        expect(firstState.length).toBe(1);
        expect(firstState[0].name).toBe('123');

        const secondState = ChartState(firstState, ChartActions.addChart({name: '123'}));
        expect(secondState.length).toBe(1);
    });

    xit('should Remove a chart from the list', (done) => {
        const firstState = ChartState([], ChartActions.addChart({name: 123}));
        const secondState = ChartState(firstState, ChartActions.addChart({name: 987}));
        expect(secondState.length).toBe(2);

        const thirdState = ChartState(secondState, ChartActions.removeChart({name: 987}));
        expect(thirdState.length).toBe(1);
        done();
    });

    xit('should Add an emote to a chart', (done) => {
        clock.set('2018-12-14');
        const firstState = ChartState([], ChartActions.addChart({name: 123}));
        const secondState = ChartState(firstState, ChartActions.chartHappy({name: 123}));
        expect(secondState).toMatchSnapshot();
        const thirdState = ChartState(secondState, ChartActions.chartSad({name: 123}));
        expect(thirdState).toMatchSnapshot();
        done();
    });

    xit('should add multiple emotes to a chart', () => {
        const firstState = ChartState([], ChartActions.addChart({name: 123}));
        const secondState = ChartState(firstState, ChartActions.chartHappy({name: 123}, new Date('2018-12-14')));
        const thirdState = ChartState(secondState, ChartActions.chartSad({name: 123}, new Date('2018-12-15')));
        const forthState = ChartState(thirdState, ChartActions.chartHappy({name: 123}, new Date('2018-12-16')));
        expect(forthState).toMatchSnapshot();
    });
});
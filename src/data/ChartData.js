export default class ChartData {
	constructor(dataStore) {
		this.dataStore = dataStore;
		this.state = null;
	}

	createChart(chartData) {
		const chartKey = this.generateKey(chartData);
		this.state[chartKey] = chartData;
		this.saveChanges();
		return Promise.resolve(this.state);
	}

	generateKey(chartData) {
		return `${chartData.groupName}__${chartData.chartName}`;
	}

	getCharts() {
		if (this.state) {
			return Promise.resolve(this.state);
		}
		else {
			return this.loadFromExternal().then((newState) => {
				this.state = newState;
				return newState;
			});
		}
	}

	loadFromExternal() {
		const charts = this.dataStore.loadData();
		if (!charts) {
			return Promise.resolve({})
		}
		else {
			return Promise.resolve(charts);
		}
	}

	getChart(chartId) {

	}

	getChartGroups() {

	}

	getChartsForGroup(groupName) {

	}

	saveChanges() {
		this.dataStore.saveData(this.state);
	}
}

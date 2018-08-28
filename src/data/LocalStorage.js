export default class LocalStorage {
	saveData(state) {
		console.info('Save state: ', state);
		window.localStorage.setItem('charts', JSON.stringify(state));
	}

	loadData() {
		const chartData = window.localStorage.getItem('charts');
		if (chartData) {
			return JSON.parse(chartData);
		}
		else {
			return {};
		}
	}
}

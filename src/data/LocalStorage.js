export function saveData(state) {
	console.info('Save state: ', state);
	window.localStorage.setItem('charts', JSON.stringify(state));
}

export function loadData() {
	return new Promise((resolve, reject) => {
		if (!window.localStorage) {
			return reject('Local Storage not available in your browser');
		}

		const chartData = window.localStorage.getItem('charts');
		if (chartData) {
			return resolve(JSON.parse(chartData));
		}

		return resolve({});
	});
}



export function saveData(state) {
	window.localStorage.setItem('charts', JSON.stringify(state));
}

export function loadData() {
	try {
		const chartData = window.localStorage.getItem('charts');
		if (chartData) {
			return JSON.parse(chartData, revivier);
		}
		else {
			return undefined;
		}
	}
	catch (error) {
		return undefined;
	}
}

function revivier(key, value) {
	console.info('revive', key, value);
	if (key === 'date') {
		return new Date(value);
	}
	return value;
}



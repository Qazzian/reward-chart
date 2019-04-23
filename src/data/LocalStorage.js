export function saveData(state) {
	window.localStorage.setItem('charts', JSON.stringify(state));
}

export function loadData() {
	try {
		const chartData = window.localStorage.getItem('charts');
		if (chartData) {
			return JSON.parse(chartData, reviver);
		}
		else {
			return undefined;
		}
	}
	catch (error) {
		return undefined;
	}
}

function reviver(key, value) {
	if (key === 'date') {
		return new Date(value);
	}
	return value;
}



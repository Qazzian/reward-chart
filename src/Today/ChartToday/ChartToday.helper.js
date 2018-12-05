export const dateFormatOptions = {
  year: 'numeric',
  month: '2-diget',
  day: '2-diget',
}

export function dateStr(date) {
	return date.toLocaleDateString(dateFormatOptions);
}

export function dateFromNow(days) {
	let date = new Date();
	date.setDate(date.getDate() - (days));
	return dateStr(date);
}

export const todayStr = new Date().toLocaleDateString(dateFormatOptions);

export const dateFormatOptions = {
  year: 'numeric',
  month: '2-diget',
  day: '2-diget',
}

export function toDateString(date) {
	if (date instanceof Date) {
		return date.toLocaleDateString(dateFormatOptions);
	}
	else {
		throw new Error(`expected Date object but got ${date}`)
	}
}
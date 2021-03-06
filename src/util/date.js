import {format, parse} from 'date-fns';

export const dateFormatOptions = {
  year: 'numeric',
  month: '2-diget',
  day: '2-diget',
};

export function toDateString(date) {
	if (date instanceof Date) {
		return date.toLocaleDateString(dateFormatOptions);
	}
	else {
		throw new Error(`expected Date object but got ${date}`)
	}
}

export function toEmoteDateString(date) {
	if (date instanceof Date) {
		return format(date, 'YYYY-MM-DD');
	}
	else {
		throw new Error(`expected Date object but got ${date}`)
	}
}

export function fromEmoteDateString(dateString) {
	return parse(dateString, 'YYYY-MM-DD');
}

export function subtractDays(date, days) {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() - days);
	return newDate;
}

export function loopOverDays(daysBack, callback, endDate=new Date()) {
	for (let index = (daysBack-1); index >= 0; index--) {
		const currentDate = subtractDays(endDate, index);
		callback(currentDate);
	}
}

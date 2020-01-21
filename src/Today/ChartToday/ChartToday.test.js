import React from "react";
import {shallow, mount} from "enzyme";

import {ChartToday} from './ChartToday';
import clock from "jest-plugin-clock";

describe('<ChartToday/>', () => {
	const fakeChart = {name: 'TestChart'};

	test('should render', () => {
		const chartElement = shallow(<ChartToday chart={fakeChart}/>);
		const headerElement = chartElement.find('h2');
		expect(headerElement.length).toBe(1);
		expect(headerElement.text()).toBe('TestChart');
	});

	test('should show result for current day', () => {
		const filledChart = {
			name: 'filledChart',
			emotes: [{
				date: new Date(),
				emote: 'happy',
			}]
		};
		const chartElement = shallow(<ChartToday chart={filledChart}/>);
		// Need to decide what the happy state looks like
		expect(chartElement).toBeDefined();
	});

	// todo Move to the date utils file
	xdescribe('Helper functions', () => {
		beforeEach(() => {
			clock.set('2019-01-05');
		});

		it('subtract days', () => {
			const tests = [
				{
					start: '2018-11-11',
					change: 2,
					expected: '2018-11-09'
				},
				{
					start: '2018-11-02',
					change: 3,
					expected: '2018-10-30'
				},
				{
					start: '2018-01-02',
					change: 3,
					expected: '2017-12-30'
				},
			];

			tests.forEach((test) => {
				const startDate = new Date(test.start);
				const expectedDate = new Date(test.expected);
				expect(subtractDays(startDate, test.change)).toEqual(expectedDate);
			})
		});

		it('fillMissingDays should create 2 days back', () => {
			const twoDays = [
				{
					date: new Date('2019-01-04'),
					emote: '',
				},
				{
					date: new Date('2019-01-05'),
					emote: '',
				}
			];

			expect(fillMissingDays([], 2)).toMatchObject(twoDays);
		});

		xit('fillMissingDays should include existing emotes', () => {
			const startWith = [
				{
					date: new Date('2019-01-04'),
					emote: 'HAPPY',
				}
			];
			const expected = [
				{
					date: new Date('2019-01-04'),
					emote: 'HAPPY',
				},
				{
					date: new Date('2019-01-05'),
					emote: '',
				}
			];
			expect(fillMissingDays(startWith, 2)).toMatchObject(expected);
		});


	});

});

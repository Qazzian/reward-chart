import * as dateUtil from './date'; 

describe('Date Utils', () => {
	
	it('should compile correctly', () => {
		expect(dateUtil).toBeDefined();
	});

	describe('toDateString', () => {
		const {toDateString} = dateUtil;

		it('should format the date correctly', () => {
			expect(toDateString(new Date('2018-12-14'))).toBe('2018-12-14');
		});
	});

	describe('subtractDays', () => {
		const {subtractDays} = dateUtil;
		const tests = [
			{
				name: 'calc two days off',
				startDate: '2018-12-14',
				subtract: 2,
				expected: '2018-12-12',
			},
			{
				name: 'cross month boundries',
				startDate: '2018-12-05',
				subtract: 7,
				expected: '2018-11-28',
			},
			{
				name: 'Cross year boundries',
				startDate: '2019-01-5',
				subtract: 7,
				expected: '2018-12-29',
			},
		];

		tests.forEach((test) => {
			it(`should ${test.name}`, () => {
				const startDate = new Date(test.startDate);
				const expectedDate = new Date(test.expected);
				expect(subtractDays(startDate, test.subtract).toDateString())
					.toMatch(expectedDate.toDateString());
			});
		});

	});

	describe('loopOverDays', () => {
		const {loopOverDays} = dateUtil;

		it('should iterate over the days', () => {
			const spy = jest.fn((dateParam) => {});
			loopOverDays(5, spy, new Date('2018-12-14'));
			expect(spy.mock.calls.length).toBe(5);
			expect(spy.mock.calls).toMatchSnapshot();
		});
	});
});
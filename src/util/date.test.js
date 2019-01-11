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
});
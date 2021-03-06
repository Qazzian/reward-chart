import React from "react";
import { shallow } from "enzyme";

import Today from './Today';

describe('<Today/>', () => {
	let mountedTodayComponent;

	const todayPage = () => {
		if (!mountedTodayComponent) {
			mountedTodayComponent = shallow(<Today/>);
		}
		return mountedTodayComponent;
	};

	beforeEach(() => {
		mountedTodayComponent = undefined;
	});

	afterEach(() => {
	});

	it('should render the Today page', (done) => {
		expect(todayPage).toBeDefined();
		done();
	});
});

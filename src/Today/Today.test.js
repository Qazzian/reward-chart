import React from "react";
// import { mount } from "enzyme";

import Today from './Today';

jest.mock('./TodayContainer', () => () => <div id="mockTodayContainer">mock chart template</div>);

describe('Today Page', () => {
	let mountedTodayComponent;

	const todayPage = () => {
		if (!mountedTodayComponent) {
			// mountedTodayComponent = mount(<Today/>);
		}
		return mountedTodayComponent;
	};

	beforeEach(() => {
		mountedTodayComponent = undefined;
	});

	afterEach(() => {
	});

	xit('should render the Today page', (done) => {
		const header = todayPage().find(".todayHeader");
		expect(header.length).toBe(1);
		done();
	});
});

import React from "react";
import { shallow, mount } from "enzyme";

import ChartToday from './ChartToday';
import * as helpers from './ChartToday.helper';

describe('<ChartToday/>', () => {
  const fakeChart = {name: 'TestChart'};

  test('should render', () => {
    const chartElement = shallow(<ChartToday chart={fakeChart}/>);
    const headerElement = chartElement.find('h2');
    expect(headerElement.length).toBe(1);
    expect(headerElement.text()).toBe('TestChart');
  });
  
  it('should have emote buttons', () => {
    const mockHappy = jest.fn();
    const mockSad = jest.fn();

    const chartElement = mount(<ChartToday 
      chart={fakeChart} 
      onHappyClick={mockHappy} 
      onSadClick={mockSad}
		/>);
		console.info('chartElement', chartElement);
    const buttons = chartElement.find('button');
    console.info('BUTTONS:', buttons.length);
    expect(buttons.length).toBe(2);
    buttons.first().simulate('click');
    buttons.first().simulate('click');
    expect(mockHappy.mock.calls.length).toBe(2);
    buttons.at(1).simulate('click');
    expect(mockSad.mock.calls.length).toBe(1);
  });

  test('should show result for current day', () => {
    const filledChart = {
      name: 'filledChart',
      emotes: [{
				date: helpers.todayStr,
				emote: 'happy',
			 }]
    }
		const chartElement = shallow(<ChartToday chart={filledChart} />);
		// Need to decide what the happy state looks like
    expect(chartElement).toBeDefined();
  });
	
});

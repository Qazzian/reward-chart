import React from "react";
import { shallow } from "enzyme";

import ChartToday from './ChartToday';

describe('<ChartToday/>', () => {
  const fakeChart = {name: 'TestChart'};

  const todayString = () => {
    // I want YYYYMMDD
    Date.now();
  }

  test('should render', () => {
    const chartElement = shallow(<ChartToday chart={fakeChart}/>);
    const headerElement = chartElement.find('h2');
    expect(headerElement.length).toBe(1);
    expect(headerElement.text()).toBe('TestChart');
  });
  
  test('should have emote buttons', () => {
    const mockHappy = jest.fn();
    const mockSad = jest.fn();

    const chartElement = shallow(<ChartToday 
      chart={fakeChart} 
      onHappyClick={mockHappy} 
      onSadClick={mockSad}
    />);
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
      emotes: {
        '2018-11-27': ['happy']
      }
    }
    const chartElement = shallow(<ChartToday chart={filledChart} />);
    expect(true).toBe(true);
  });
  
  
})

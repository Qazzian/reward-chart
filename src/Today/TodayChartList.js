import React from 'react';
import ChartToday from './ChartToday/ChartToday';
import NewChartContainer from '../components/newChart/NewChartContainer';

const TodayChartList = (props) => {
  if (props.charts.length === 0) {
    return (
      <>
        <p>You have no charts yet.</p>
        <p>Why not create one?</p>
        <NewChartContainer />
      </>
    )
  }

	return props.charts.map((chart) => (
		<ChartToday key={chart.name} chart={chart} onHappyClick={props.onHappyClick} onSadClick={props.onSadClick}/>
	));
};

export default TodayChartList;

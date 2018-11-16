import React from 'react';
import ChartToday from './ChartToday';

const TodayChartList = (props) => {
	return props.charts.map((chart) => (
		<ChartToday key={chart.name} chart={chart} onHappyClick={props.onHappyClick} onSadClick={props.onSadClick}/>
	));
};

export default TodayChartList;

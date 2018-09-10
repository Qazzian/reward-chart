import React from 'react';
import ChartToday from './ChartToday';

const TodayChartList = (props) => {
	return (
		<section>
			{props.charts.map((chart) => (
				<ChartToday key={chart.name} chart={chart} onHappyClick={props.onHappyClick} onSadClick={props.onSadClick} />
			))}
		</section>
	)
};

export default TodayChartList;

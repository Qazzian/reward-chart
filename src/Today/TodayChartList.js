import React from 'react';
import ChartToday from './ChartToday/ChartToday';
import NewChartContainer from '../components/newChart/NewChartContainer';

export default function (props) {
	if (props.charts.length === 0) {
		return renderEmptyPage();
	}
	else {
		return renderChartList(props);
	}
};

const renderEmptyPage = () => (
	<>
		<p>You have no charts yet.</p>
		<p>Why not create one?</p>
		<NewChartContainer />
	</>
);

const renderChartList = (props) => props.charts.map((chart) => (
	<ChartToday key={chart.name}
		chart={chart}
		onHappyClick={props.onHappyClick}
		onSadClick={props.onSadClick}
	/>
));

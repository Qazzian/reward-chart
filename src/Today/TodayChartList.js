import React from 'react';
import {connect} from 'react-redux';

import {getAllCharts} from '../data/AppState';
import {chartHappy, chartSad} from '../data/charts';
import {addEmote, updateEmote, getEmoteById} from '../data/emotes';

import ChartToday from './ChartToday/ChartToday';
import NewChartContainer from '../components/newChart/NewChartContainer';

function mapStateToProps (state) {
	console.info('Today connector: ', state);
	const charts = getAllCharts(state);
	console.info('All charts: ', charts);
	return {charts};
}


function mapDispatchToProps (dispatch) {
	return {
		onHappyClick: id => {
			dispatch(chartHappy(id))
		},
		onSadClick: id => {
			dispatch(chartSad(id))
		}
	}
}


function TodayChartList(props) {
	console.info('TodayChartList props', props);
	if (props.charts && props.charts.length > 0) {
		return (<ChartList {...props} />);
	}
	else {
		return (<EmptyPage/>);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodayChartList)

const EmptyPage = () => (
	<>
		<p>You have no charts yet.</p>
		<p>Why not create one?</p>
		<NewChartContainer />
	</>
);

const ChartList = (props) => props.charts.map((chart) => (
	<ChartToday key={chart.name}
		chart={chart}
		onHappyClick={props.onHappyClick}
		onSadClick={props.onSadClick}
	/>
));



///



import React from 'react';
import {connect} from 'react-redux';

import {getAllCharts} from '../data/AppState';
import {dispatchAddHappy, dispatchAddSad} from "../data/AppState";

import ChartToday from './ChartToday/ChartToday';
import NewChartContainer from '../components/newChart/NewChartContainer';

function mapStateToProps (state) {
	const charts = getAllCharts(state);
	return {charts};
}


function mapDispatchToProps (dispatch) {
	return {
		onHappyClick: id => dispatchAddHappy(dispatch, id),
		onSadClick: id => dispatchAddSad(dispatch, id),
	}
}


function TodayChartList(props) {
	if (props.charts && props.charts.length > 0) {
		return (<ChartList {...props} />);
	}
	else {
		return (<EmptyPage/>);
	}
}

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
	<ChartToday key={chart.id}
		chart={chart}
		onHappyClick={() => props.onHappyClick(chart.id)}
		onSadClick={() => props.onSadClick(chart.id)}
	/>
));



///



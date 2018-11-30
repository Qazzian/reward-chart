import {connect} from 'react-redux';
import {chartHappy, chartSad} from '../data/ChartActions';
import TodayChartList from './TodayChartList';

function mapStateToProps (state) {
	console.info('mapStateToProps', state);
	return {
		charts: state.charts || []
	}
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
const TodayConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodayChartList);

export default TodayConnector
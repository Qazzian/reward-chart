import {connect} from 'react-redux';
import {addChart} from '../../data/ChartActions';
import NewChart from './NewChart';

function mapStateToProps () {
	return {}
}

function mapDispatchToProps (dispatch) {
	return {
		addChart: data => {
			dispatch(addChart(data))
		},
	}
}

const NewChartContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NewChart);

export default NewChartContainer;

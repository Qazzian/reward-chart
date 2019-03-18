import {connect} from 'react-redux';
import {addChart} from '../../data/charts';
import NewChart from './NewChart';

function mapStateToProps () {
	return {}
}

function mapDispatchToProps (dispatch) {
	return {
		addChart: ({id, name}) => {
			dispatch(addChart({id, name}))
		},
	}
}

const NewChartContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NewChart);

export default NewChartContainer;

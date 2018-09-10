import React, {Component} from 'react';

export default class NewChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChartNameChange = this.onChartNameChange.bind(this);
	}


	onChartNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addChart(this.state);
		// TODO action to redirect to the new chart page.
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p>
					<label htmlFor="chartName">Chart Name</label>
					<input name="chartName" onChange={this.onChartNameChange}/>
				</p>
				<p>
					<input type="submit"/>
				</p>
			</form>
		);
	}


}

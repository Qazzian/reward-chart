import React, {Component} from 'react';

export default class NewChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groupName: '',
			name: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onGroupNameChange = this.onGroupNameChange.bind(this);
		this.onChartNameChange = this.onChartNameChange.bind(this);
	}

	onGroupNameChange(event) {
		this.setState({groupName: event.target.value});
	}

	onChartNameChange(event) {
		this.setState({chartName: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.createNewChart(this.state);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p>
					<label htmlFor="groupName">Group Name</label>
					<input name="groupName" onChange={this.onGroupNameChange}/>
				</p>
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

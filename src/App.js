import React, {Component} from 'react';
import './App.scss';

import Header from './components/header/Header';
import NewChart from './components/newChart/NewChart';
import Today from './components/Today';
import Charts from './components/Charts';
import More from './components/More';
import AppState from './data/AppState';

import {
	BrowserRouter,
	Route,
} from 'react-router-dom';

const Routes = () => {
	return (
		<div className="main">
			<Route path="/" exact={true} component={Today}/>
			<Route path="/today" component={Today}/>
			<Route path="/charts" component={Charts}/>
			<Route path="/more" component={More}/>
		</div>
	);
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			charts: {},
		};

		this.createNewChart = this.createNewChart.bind(this);
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<div className="container">
						<Header/>
						{this.state.charts ? <Routes/> : <NewChart createNewChart={this.createNewChart}/>}
					</div>
				</div>
			</BrowserRouter>
		);
	}

	componentDidMount() {
	}

	createNewChart(chartData) {
	}
}

export default App;

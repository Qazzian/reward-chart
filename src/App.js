import React, {Component} from 'react';
import { Provider } from 'react-redux'
import './App.scss';

import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import NewChartContainer from './components/newChart/NewChartContainer';
import Today from './Today/Today';
import Charts from './components/Charts';
import More from './components/More';
import AppState from './data/AppState';
import ChartStore from './data/ChartStore';

import {
	BrowserRouter,
	Route,
} from 'react-router-dom';

const Routes = () => {
	return (
		<div className="main">
			<Route path="/" exact={true} component={Today}/>
			<Route path="/today" component={Today}/>
			<Route path="/new" component={NewChartContainer}/>
			<Route path="/charts" component={Charts}/>
			<Route path="/more" component={More}/>
		</div>
	);
};


class App extends Component {
	constructor(props) {
		super(props);
		this.store = ChartStore(AppState);
		this.state = {
			charts: {},
		};

		this.createNewChart = this.createNewChart.bind(this);
	}

	render() {
		return this.renderWithRoutes();
	}

	renderWithRoutes() {
		return (
			<Provider store={this.store}>
				<BrowserRouter>
					<div className="App">
						<div className="container">
							<Header/>
							{this.state.charts ? <Routes/> : <NewChartContainer/>}
							<Footer/>
						</div>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}

	componentDidMount() {
	}

	createNewChart(chartData) {
	}
}

export default App;

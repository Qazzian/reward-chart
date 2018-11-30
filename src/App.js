import React, {Component} from 'react';
import { Provider } from 'react-redux'
import './util/icons';
import './App.scss';

import PageTemplate from './components/PageTemplate';
import NewChartContainer from './components/newChart/NewChartContainer';
import Today from './Today/Today';
import Charts from './components/Charts';
import More from './components/More';
import AppState from './data/AppState';
import ChartStore from './data/ChartStore';
import {saveData, loadData} from './data/LocalStorage';

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
		const initialState = loadData();

		this.store = ChartStore(AppState, initialState);
		this.store.subscribe(() => {
			saveData(this.store.getState());
		})
	}

	render() {
		return this.renderWithRoutes();
	}

	renderWithRoutes() {
		return (
			<Provider store={this.store}>
				<BrowserRouter>
					<div className="App">
            <PageTemplate>
              <Routes/>
            </PageTemplate>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;

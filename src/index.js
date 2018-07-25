import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import LocalStorage from './data/LocalStorage';
import ChartData from './data/ChartData';

const chartData = new ChartData(new LocalStorage());

ReactDOM.render(<App chartData={chartData}/>, document.getElementById('root'));

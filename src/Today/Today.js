import React from 'react';
import TodayChartList from './TodayChartList';

import './today.scss';

const Today = () => {
	return (
		<div className='today'>
			{/* <h1 className="todayHeader">Today's records</h1> */}
			<TodayChartList />
		</div>
	);
};

export default Today;

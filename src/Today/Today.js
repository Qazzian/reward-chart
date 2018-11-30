import React from 'react';
import TodayConnector from './TodayConnector';

const Today = () => {
	return (
		<div>
			<h1 className="todayHeader">Today's records</h1>
			<TodayConnector />
		</div>
	);
};

export default Today;

import React from 'react';
import TodayConnector from './TodayConnector';

import './today.scss';

const Today = () => {
	return (
		<div class='today'>
			{/* <h1 className="todayHeader">Today's records</h1> */}
			<TodayConnector />
		</div>
	);
};

export default Today;

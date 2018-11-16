import React from 'react';
import './ChartToday.css';

import bem from '../util/bem';

const ChartToday = ({chart, onHappyClick, onSadClick}) => {
	if (!chart) {
		return null;
	}

	return (
		<article className={'chartToday'} key={chart.id}>
			<h2>{chart.name}</h2>
			<div className={'chartToday__body'}>
				<div className={'chartToday__state'}/>
				<button className={bem('chartToday', 'button', ['happy'])} onClick={() => onHappyClick(chart)}>&#x263a;</button>
				<button className={bem('chartToday', 'button', ['sad'])} onClick={() => onSadClick(chart)}>&#x2639;</button>
			</div>
		</article>
	)
};

export default ChartToday;

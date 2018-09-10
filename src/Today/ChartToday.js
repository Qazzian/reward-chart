import React from 'react';

const ChartToday = ({chart, onHappyClick, onSadClick}) => {
	if (!chart) {
		return null;
	}

	return (
		<section className={'chartToday'} key={chart.id}>
			<h2>{chart.name}</h2>
			<div className={'chartToday__body'}>
				<div className={'chartToday__state'}/>
				<button className={'chartToday__happyButton'} onClick={() => onHappyClick(chart.id)}/>
				<button className={'chartToday__sadButton'} onClick={() => onSadClick(chart.id)}/>
			</div>
		</section>
	)
};

export default ChartToday;

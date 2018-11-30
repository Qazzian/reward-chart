import React from 'react';
import './ChartToday.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bem from '../../util/bem';

const blockName = 'chartToday';

const ChartToday = ({ chart, onHappyClick, onSadClick }) => {
	if (!chart) {
		return null;
	}

	return (
		<article className={'chartToday'} key={chart.name}>
			<h2>{chart.name}</h2>
			<div className={bem(blockName, 'body')}>
				<div className={bem(blockName, 'state')}></div>
				<div className={bem(blockName, "emoteControls")}>
					<button className={bem('chartToday', 'button', ['happy'])} onClick={() => onHappyClick(chart)}>
						<FontAwesomeIcon icon="smile" />
					</button>
					<button className={bem('chartToday', 'button', ['sad'])} onClick={() => onSadClick(chart)}>
						<FontAwesomeIcon icon="frown" />
					</button>
				</div>
			</div>
		</article>
	)
};

export default ChartToday;

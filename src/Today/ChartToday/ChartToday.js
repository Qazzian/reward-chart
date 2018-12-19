import React from 'react';
import './ChartToday.scss';
import ButtonIcon from '../../atoms/buttons/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bem from '../../util/bem';

const blockName = 'chartToday';

const ChartToday = ({ chart, onHappyClick, onSadClick }) => {
	if (!chart) {
		return null;
	}

	return (
		<article className={'chartToday'} key={chart.name}>
			<h2 className='chartToday__title'>{chart.name}</h2>
			<div className={bem(blockName, 'body')}>
				<div className={bem(blockName, 'pastEmotes')}>
					{renderEmoteList(chart.emotes)}
				</div>
				<div className={bem(blockName, "emoteControls")}>
					<ButtonIcon
						className={bem('chartToday', 'button', ['happy'])} 
						onClick={() => onHappyClick(chart)}
						emote="HAPPY" 
					/>
					<ButtonIcon
						className={bem('chartToday', 'button', ['sad'])} 
						onClick={() => onSadClick(chart)}
						emote="SAD" 
					/>
				</div>
			</div>
		</article>
	)
};

export default ChartToday;

function renderEmoteList(emotes) {
	return emotes && emotes.map((emoteObj) => {
			return (
				<span key={emoteObj.date} className={bem(blockName, 'emoteDay')}>
				  {emoteObj.date} <br />
					{emoteObj.emote}
				</span>
			)
		});
}

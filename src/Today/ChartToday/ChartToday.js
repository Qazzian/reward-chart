import React from 'react';
import './ChartToday.scss';
import EmoteDay from '../EmoteDay/EmoteDay';
import ButtonIcon from '../../atoms/buttons/ButtonIcon';

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

export function subtractDays(date, days) {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() - days);
	return newDate;
}

export function fillMissingDays(emotes, days) {
	const today = new Date();
	const filledDays = [];
	for (let index = 0; index < days; index++) {
		filledDays.push({
			date: subtractDays(today, index),
			emote: '',
		});
	}

	return filledDays;
}

function renderEmoteList(emotes) {
	return emotes && emotes.map((emoteObj) => {
			return (
				<EmoteDay 
					key={emoteObj.date}
					date={emoteObj.date} 
					emote={emoteObj.emote} 
					className={bem(blockName, 'emoteDay')}
				/>
			)
		});
}

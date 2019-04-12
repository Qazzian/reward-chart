import React from 'react';
import './ChartToday.scss';

import ButtonIcon from '../../atoms/buttons/ButtonIcon';
import EmoteList from '../../components/emote/EmoteList';

import bem from '../../util/bem';
import {toDateString, loopOverDays} from '../../util/date';

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
					<EmoteList emoteIds={chart.emotes} />
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
	const filledDays = [];
	loopOverDays(days, (currentDate) => {
		filledDays.push({
			date: currentDate,
			emote: '',
		});
	});
	return filledDays;
}

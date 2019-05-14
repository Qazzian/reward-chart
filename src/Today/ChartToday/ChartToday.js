import React from 'react';
import {connect} from 'react-redux';

import ButtonIcon from '../../atoms/buttons/ButtonIcon';
import EmoteList from '../../components/emote/EmoteList';

import bem from '../../util/bem';

import './ChartToday.scss';
import {getLastXEmotes} from "../../data/AppState";

const blockName = 'chartToday';

const mapStateToProps = (state, ownProps) => ({
	emoteList: getLastXEmotes(state, ownProps.chart, 5),
});

const ChartToday = ({chart, emoteList, onHappyClick, onSadClick}) => {
	if (!chart) {
		return null;
	}

	return (
		<article className={'chartToday'} key={chart.name}>
			<h2 className='chartToday__title'>{chart.name}</h2>
			<div className={bem(blockName, 'body')}>
				<div className={bem(blockName, 'pastEmotes')}>
					<EmoteList emoteIds={emoteList}/>
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

export default connect(mapStateToProps)(ChartToday);

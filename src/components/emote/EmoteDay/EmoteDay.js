import React from 'react';

import {fromEmoteDateString, toDateString} from '../../../util/date';
import bem from '../../../util/bem';
import Emote from '../Emote';
import './EmoteDay.scss';

export default ({date, emote, className}) => (
	<section className={bem('EmoteDay', '',  [setModifiers(emote)])}>
		<header>{formatDate(date)}</header>
		<div className="EmoteDay__body">
			<Emote emote={emote} />
		</div>
	</section>
)

function formatDate(dateString) {
	const date = fromEmoteDateString(dateString);
	return toDateString(date);
}


function setModifiers(emote) {
	switch (emote) {
		case 'happy':
		case 'sad':
			return emote;
		default:
			return '';
	}
}

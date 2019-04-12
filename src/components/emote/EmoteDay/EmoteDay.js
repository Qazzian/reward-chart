import React from 'react';

import bem from '../../../util/bem';
import Emote from '../../../atoms/emote/Emote';
import './EmoteDay.scss';

export default ({date, emote, className}) => (
	<section className={bem('EmoteDay', '',  [setModifiers(emote)])}>
		<header>{date}</header>
		<div className="EmoteDay__body">
			<Emote emote={emote} />
		</div>
	</section>
)

function setModifiers(emote) {
	switch (emote) {
		case 'happy':
		case 'sad':
			return emote;
		default:
			return '';
	}
}

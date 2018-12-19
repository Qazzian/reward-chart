import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bem from '../../util/bem';

import './emote.scss';

const emoteToIcon = {
	HAPPY: {
		icon: 'smile',
	},
	SAD: {
		icon: 'frown',
	},
};

export default ({emote, altText}) => {
	if (!(emote in emoteToIcon)) {
		return (<span class="error">unkown emote: ${emote}</span>);
	}

	return (
	<div className={bem('emote', '', [emote])}>
		<FontAwesomeIcon icon={emoteToIcon[emote].icon} />
		{altText ? (<span className="sr-only">{altText}</span>) : ''}
	</div>
)};
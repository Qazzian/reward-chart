import React from 'react';
import classnames from 'classnames';
import Emote from '../emote/Emote';

import './buttons.scss';

export default function({className, emote, altText, ...btnProps}){
	return (
		<button 
			className={classnames('buttonIcon', className)} 
			{...btnProps}
		>
			<Emote emote={emote} />
			<span className="sr-only">{altText}</span>
		</button>
	);
}
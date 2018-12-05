import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import './buttons.scss';

export default function({className, icon, altText, ...btnProps}){
	return (
		<button 
			className={classnames('buttonIcon', className)} 
			{...btnProps}
		>
			<FontAwesomeIcon icon={icon} />
			<span className="sr-only">{altText}</span>
		</button>
	);
}
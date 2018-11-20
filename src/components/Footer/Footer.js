import React from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<NavLink to="/new" className="footer__newChartLink">New Chart</NavLink>
		</div>
	);
};

export default Footer;




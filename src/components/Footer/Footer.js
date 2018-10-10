import React from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<NavLink to="/new">New Chart</NavLink>
		</div>
	);
};


export default Footer;




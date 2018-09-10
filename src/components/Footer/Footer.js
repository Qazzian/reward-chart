import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/new">New Chart</Link></li>
			</ul>
		</nav>
	);
};


export default Footer;




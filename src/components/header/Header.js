import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Todays Tasks</Link></li>
				<li><Link to="/charts">Charts</Link></li>
				<li><Link to="/more">More</Link></li>
			</ul>
		</nav>
	);
};


export default Header;




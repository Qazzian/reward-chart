import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<nav>
			<Link to="/">Todays Tasks</Link>
			<Link to="/charts">Charts</Link>
			<Link to="/more">More</Link>
		</nav>
	);
};


export default Header;




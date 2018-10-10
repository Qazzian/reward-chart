import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<nav>
			<NavLink to="/" activeClassName="isActive" exact>Today's Tasks</NavLink>
			<NavLink to="/charts" activeClassName="isActive">Charts</NavLink>
			<NavLink to="/more" activeClassName="isActive">More</NavLink>
		</nav>
	);
};


export default Header;




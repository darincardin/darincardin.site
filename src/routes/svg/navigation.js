import React from "react";

import {NavLink} from 'react-router-dom';


import  './styles.scss';

var Navigation = props =>{
	
	return (
	
			<nav className="navbar subnav navbar-default">
				<ul className="nav navbar-nav">					
					<li><NavLink to="/svg/rocket">Rocket</NavLink></li>
					<li><NavLink to="/svg/cursive">Cursive</NavLink></li>		
					<li><NavLink to="/svg/tropic">Tropic</NavLink></li>							
				</ul>	
			</nav>					
	)	
}

export default Navigation;
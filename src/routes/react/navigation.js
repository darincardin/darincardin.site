import React from "react";

import {NavLink} from 'react-router-dom';


//import  './styles.scss';

var Navigation = props =>{
	
	return (
	
		<nav className="navbar subnav navbar-default">
			<ul className="nav navbar-nav">	
				<li><NavLink to="/react/step">Step Bar</NavLink></li>		
				<li><NavLink to="/react/token">Tokenizer</NavLink></li>					
				<li><NavLink to="/react/form">Form</NavLink></li>					
			</ul>	
		</nav>				
	)	
}

export default Navigation;
import React from "react";

import {NavLink} from 'react-router-dom';




var Navigation = props =>{
	
	return (
	
		<nav className="navbar navbar-default">
			<ul className="nav navbar-nav">					
				<li><NavLink to="/code/form">Form</NavLink></li>
				<li><NavLink to="/code/token">Tokenizer</NavLink></li>		
				<li><NavLink to="/code/step">Step Bar</NavLink></li>		
									
			</ul>	
		</nav>			
	
	)
	
}

export default Navigation;
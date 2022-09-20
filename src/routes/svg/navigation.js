import React from "react";

import Nav from 'react-bootstrap/Nav';

import {NavLink} from 'react-router-dom';




var Navigation = props =>{
	
	return (
	
	    <Nav className="secondary-nav">
	      <Nav.Item><NavLink to="/svg/cursive">Cursive</NavLink></Nav.Item>
		  <Nav.Item><NavLink to="/svg/rocket">Rocket</NavLink></Nav.Item>
		  <Nav.Item><NavLink to="/svg/tropic">Tropic</NavLink></Nav.Item>   
        </Nav>
	
	
	
			
	)	
}

export default Navigation;

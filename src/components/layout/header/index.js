import { h } from 'preact';

import { NavLink } from "react-router-dom";

import ('./style.scss');


var Header =  props => {
	

		var SubNav = () =>
			<span class="dropdown">
				<a class="dropdown-toggle" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Coding	<span class="caret"></span>
				</a>
					<ul class="dropdown-menu" aria-labelledby="about-us">
						<li><NavLink to="/casestudy">Case Study</NavLink></li>	
						<li><NavLink to="/react">ReactJS</NavLink></li>	
						<li><NavLink to="/svg">SVG</NavLink></li>	
					</ul>
			</span>			
						
		var Navigation = ()=>	
				<nav>
					<ul>
					
						<li><NavLink to="/home">Home</NavLink></li>	
						<li><NavLink to="/resume">Resume</NavLink></li>		
						<li><SubNav /></li>					
						<li><NavLink to="/other">Other</NavLink></li>	
					</ul>
				</nav>
				

			

		return (
			<header>
				<div name="main">
				
					<Navigation />

					<article>
					
						<img height="54" class="title" src="../images/svg/name.svg" />
						<div className="sub">
							Hello, I'm a front-end web developer with nine years of experience.&nbsp;
							<br className="hidden-xs hidden-sm"/>

							<span>My focus is React and Angular. </span>
						</div>
			
					</article>
				</div>		
				
				<img name="overlay"  src="../images/svg/header.svg" />				
			</header>
	  );

}

export default Header;

import { h } from 'preact';
import { Link } from 'preact-router/match';
//import style from './style.scss';
/*
const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</header>
);

export default Header;

	<li><SubNav /></li>		

*/



import './style.scss';


var Header =  props => {
	

		var SubNav = () =>
			<span class="dropdown">
				<a class="dropdown-toggle" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Coding	<span class="caret"></span>
				</a>
					<ul class="dropdown-menu" aria-labelledby="about-us">
						<li><Link to="/casestudy">Case Study</Link></li>	
						<li><Link to="/code">ReactJS</Link></li>	
						<li><Link to="/svg">SVG</Link></li>	
					</ul>
			</span>			
						
		var Navigation = ()=>	
				<nav>
					<ul>
					
						
						<li><Link href="/home">Home</Link></li>	
						<li><Link href="/resume">Resume</Link></li>		
							
						<li><Link href="/other">Other</Link></li>	
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

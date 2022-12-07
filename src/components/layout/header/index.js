
import  Navigation  from "./navigation.js";




var Header =  props => {
	

		return (
			<header>

			
				<div name="main">
				
					<Navigation />

					<article>
					
						<img height="54" class="title" src="../assets/svg/name.svg" />
						<div className="sub">
							Hello, I'm a front-end web developer with nine years of experience.&nbsp;
							<br className="hidden-xs hidden-sm"/>

							<span className="hidden-xs hidden-sm">My focus is React and Angular. </span>
						</div>
			
					</article>
				</div>		
				
				<img name="overlay"  src="../assets/svg/header.svg" />				
			</header>
	  );

}

export default Header;

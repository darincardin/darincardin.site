
import  SubNav  from "./subnav";
import  Link  from "../link";


var Navigation = ()=>	
				<nav>
					<ul>
					
						<li><Link to="/home">Home</Link></li>	
						<li><Link to="/resume">Resume</Link></li>		
						<li><SubNav /></li>					
						<li><Link to="/other">Other</Link></li>	
					</ul>
				</nav>
				
export default Navigation;
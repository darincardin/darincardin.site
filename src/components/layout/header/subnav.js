
import  Link  from "../link";

		var SubNav = () =>
			<span class="dropdown">
				<a class="dropdown-toggle" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Coding	<span class="caret"></span>
				</a>
					<ul class="dropdown-menu" aria-labelledby="about-us">
						<li><Link to="/casestudy">Case Study</Link></li>	
						<li><Link to="/react">ReactJS</Link></li>	
						<li><Link to="/svg">SVG</Link></li>	
					</ul>
			</span>		
			
export default SubNav;
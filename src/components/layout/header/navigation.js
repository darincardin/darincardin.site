	import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import { NavLink } from "react-router-dom";


import  SubNav  from "./subnav";
import  Link  from "../link";


var Navigation = ()=>					


    <Nav as="ul" activeKey="/home"  >
      <Nav.Item as="li"> <NavLink to="/home">Home</NavLink>  </Nav.Item>
      <Nav.Item as="li"> <NavLink to="/resume">Resume</NavLink></Nav.Item>  
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavLink to="/casestudy">Case Study</NavLink><br/>
              <NavLink to="/react">ReactJS</NavLink><br/>
              <NavLink to="/svg">SVG</NavLink>
      </NavDropdown>       
      <Nav.Item  as="li"><NavLink to="/other">Other</NavLink></Nav.Item> 
    </Nav>
				
				
export default Navigation;

/*





				<nav>
					<ul>
					
						<li><Link to="/home">Home</Link></li>	
						<li><Link to="/resume">Resume</Link></li>		
						<li><SubNav /></li>					
						<li><Link to="/other">Other</Link></li>	
					</ul>
				</nav>



*/
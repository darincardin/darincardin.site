
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';


export default  () =>(
	
	    <Nav className="secondary-nav">
	      <Nav.Item><NavLink to="/svg/rocket">Rocket</NavLink></Nav.Item>
	      <Nav.Item><NavLink to="/svg/cursive">Cursive</NavLink></Nav.Item>
		  <Nav.Item><NavLink to="/svg/tropic">Tropic</NavLink></Nav.Item>   
        </Nav>		
)	


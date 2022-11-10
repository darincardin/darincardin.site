import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';



var s = function(a,b,c){
	
	debugger;
}

export default 	()=> (
	    <Nav className="secondary-nav">
	      <Nav.Item><NavLink to="/react/step">Stepbar</NavLink></Nav.Item>
		  <Nav.Item><NavLink to="/react/form">Form</NavLink></Nav.Item>
		  <Nav.Item><NavLink to="/react/token">Tokenizer</NavLink></Nav.Item>   
		  <Nav.Item><NavLink to="/react/counter">Counter</NavLink></Nav.Item>   
		  <Nav.Item><NavLink to="/react/loadimage" onclick={s()}>Load Image</NavLink></Nav.Item>   
        </Nav>
)
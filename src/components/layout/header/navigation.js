import { Component } from 'preact';	
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

class Navigation extends Component {				

	state = {dropdown: false}

	off = ()=>{
		this.setState({dropdown: false})
	}

	toggle = ()=>{
		this.setState({dropdown: !this.state.dropdown})
	}

	render =()=> (
    <Nav as="ul" activeKey="/home"  >
	      <Nav.Item as="li"> <NavLink to="/home" onClick={this.off}>Home</NavLink> </Nav.Item>
	      <Nav.Item as="li"> <NavLink to="/resume" onClick={this.off}>Resume</NavLink></Nav.Item>  
	      
	 
	      <Nav.Item as="li" > <a onClick={this.toggle}>Coding</a> 
	      
		      
		      <Nav as="ul" onClick={this.toggle} style={{display:this.state.dropdown?'block':'none'}} >
		      	 <Nav.Item  as="li"><NavLink to="/casestudy">Case Study</NavLink></Nav.Item> 
		      	 <Nav.Item  as="li"><NavLink to="/react/step">Widgets</NavLink></Nav.Item> 
		      	 <Nav.Item  as="li"><NavLink to="/svg">SVG</NavLink></Nav.Item> 
			  </Nav>
		   
	          
	      </Nav.Item>  
	      

	      <Nav.Item  as="li"><NavLink to="/other" onClick={this.off}>Hobbies</NavLink></Nav.Item> 
    </Nav>
    )
}
				
				
export default Navigation;

import { Component } from 'preact';	
	

import Nav from 'react-bootstrap/Nav';



import { NavLink } from "react-router-dom";



class Navigation extends Component {				

	state = {dropdown: false}


	toggle =()=>{
		this.setState({dropdown: !this.state.dropdown})
	}

	render =()=> (
    <Nav as="ul" activeKey="/home"  >
      <Nav.Item as="li"> <NavLink to="/home">Home</NavLink>  </Nav.Item>
      <Nav.Item as="li"> <NavLink to="/resume">Resume</NavLink></Nav.Item>  
      
      <Nav.Item as="li" > <a onClick={this.toggle}>Coding</a> </Nav.Item>  
      {this.state.dropdown &&
	      <Nav as="ul" onClick={this.toggle} >
	      	 <Nav.Item  as="li"><NavLink to="/casestudy">Case Study</NavLink></Nav.Item> 
	      	 <Nav.Item  as="li"><NavLink to="/react">ReactJS</NavLink></Nav.Item> 
	      	 <Nav.Item  as="li"><NavLink to="/svg">SVG</NavLink></Nav.Item> 
		  </Nav>
	   }
      
      
            
      <Nav.Item  as="li"><NavLink to="/other">Other</NavLink></Nav.Item> 
    </Nav>
    )
}
				
				
export default Navigation;

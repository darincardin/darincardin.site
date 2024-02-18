
import React from 'react';

import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {				



	state = {
		
		coding:false, 
		travel:false, 
		other:false	
		
	}

	toggle =(x)=>{
		var state = {coding:false, travel:false, other:false	}
		if(x) state[x] = true;
		this.setState(state)
	}



	render =()=> (
    <Nav as="ul" activeKey="/home"  >
		
	      <Nav.Item as="li"> <NavLink to="/home"   onClick={this.toggle}>Home</NavLink> </Nav.Item>
	      <Nav.Item as="li"> <NavLink to="/resume" onClick={this.toggle}>Resume</NavLink></Nav.Item>  

	   

		  <Nav.Item as="li" > <a onClick={()=>{ this.toggle('coding') }}>Coding</a>   
		      <Nav as="ul" onClick={()=>this.toggle('coding')} style={{display:this.state.coding?'block':'none'}} >
		      	 <Nav.Item  as="li"><NavLink to="/casestudy">Case Study</NavLink></Nav.Item> 
		      	 <Nav.Item  as="li"><NavLink to="/code">Widgets</NavLink></Nav.Item> 
		      	 <Nav.Item  as="li"><NavLink to="/svg">SVG</NavLink></Nav.Item> 
			  </Nav>
	      </Nav.Item>  
	      
		  <Nav.Item as="li" > <a onClick={()=>this.toggle('travel')}>Travel</a>   
		      <Nav as="ul" onClick={()=>this.toggle('travel')} style={{display:this.state.travel?'block':'none'}} >
		      	 <Nav.Item  as="li"><NavLink to="/travel2012">2012</NavLink></Nav.Item> 
		      	 <Nav.Item  as="li"><NavLink to="/travel2016">2016</NavLink></Nav.Item> 
			  </Nav>
	      </Nav.Item>  

		  <Nav.Item as="li" > <a onClick={()=>this.toggle('other')}>Other</a> 
		      <Nav as="ul" onClick={()=>this.toggle('other')} style={{display:this.state.other?'block':'none'}} >
			  	 <Nav.Item  as="li"><NavLink to="/survival">Amateur Survival</NavLink></Nav.Item> 
		      	 <Nav.Item  as="li"><NavLink to="/videos">Videos</NavLink></Nav.Item> 
		      	 <Nav.Item  as="li"><NavLink to="/photography">Photography</NavLink></Nav.Item> 
			  </Nav>
	      </Nav.Item>  	
  
	
    </Nav>
    )
}
				
				
export default Navigation;



/*





	 

*/
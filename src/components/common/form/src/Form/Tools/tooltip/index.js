import {Component, createRef} from "preact";
import Overlay from 'react-bootstrap/Overlay';


  

import style from './style.css';


const messages = {required:"Required", phone:"Format is xxx-xxx-xxxx", containsChars:"Cannot contain characters"};

class Tooltip extends Component {

	state = {show: true}
	target = createRef();
	
	componentDidMount() {
		
	
	//	this.props.func = ()=>{alert('s')}
		//this.props.theElement.current.elem.current.children[0].onfocus = this.show;
		//this.props.theElement.current.elem.current.children[0].onblur = this.hide;
	}
	
	
	toggle = ()=>{
		this.setState({show: !this.state.show})
	}
	
	show = ()=>{
		this.setState({show: true})
	}
	
	hide = ()=>{
		this.setState({show: false})
	}

	render = () =>  {
		debugger
		var classes = "errorTooltip " + (this.props.msg?"show":""); 
		
	
		return(
			<div >
				<div  className={classes} >  
		    		{messages[this.props.msg]}
				</div>
			</div>
		)
	}
}

export default Tooltip;

// 

/*
		      <Overlay target={this.props.elem.current} show={this.state.show} placement="right" >
		        {({ placement, arrowProps, show: _show, popper, ...props }) => (
		          <div {...props} className={style.errorTooltip} >  
    				{this.props.msg}
				  </div>
		        )}
		      </Overlay>	




*/
		
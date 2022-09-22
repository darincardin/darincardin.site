import {Component, createRef} from "preact";
import Overlay from 'react-bootstrap/Overlay';


  

import style from './style.css';


class Tooltip extends Component {

	state = {show:false}
	target = createRef();
	
	componentDidMount() {
		
		this.props.onFocus = ()=>{
			alert('ddd')
		}
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

	render =() => (
		<>
		 	  <span ref={this.target}/>
		   
		      <Overlay target={this.target.current} show={this.state.show} placement="right" >
		        {({ placement, arrowProps, show: _show, popper, ...props }) => (
		          <div {...props} className={style.errorTooltip} >  
		            Simple tooltip
		          </div>
		        )}
		      </Overlay>		
		</>
	)
}

export default Tooltip;


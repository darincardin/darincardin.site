import {Component} from "preact";
import React from "react";

import 'loadimage/dist/js/loadimage.js';
import 'loadimage/dist/css/loadimage.css';

class ImgLoad extends Component{

	constructor(props){
		super(props);	
		this.elem = React.createRef();
	}

	componentDidMount(){     
		
		var style = {
		///	transition:`opacity ${this.props.wait}s`,
		//	height: `${this.props.height}`,
		//	width: `${this.props.width}`,
		}

        $(this.elem.current).loadimage( this.props.style );
	}

	render() {
		return ( <div ref={this.elem} name={this.props.name} src={this.props.src} href={this.props.href}></div> );
	}
}




export default ImgLoad;





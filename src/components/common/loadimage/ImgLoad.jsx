import {Component} from "preact";
import React from "react";

import 'jquery-plugins/loadimage/dist/js/loadimage.js';
import 'jquery-plugins/loadimage/dist/css/loadimage.css';

class ImgLoad extends Component{

	constructor(props){
		super(props);	
		this.elem = React.createRef();
	}

	componentDidMount(){     
        $(this.elem.current).loadimage( this.props.style );
	}

	render() {
		return ( <div ref={this.elem} name={this.props.name} src={this.props.src} href={this.props.href}></div> );
	}
}




export default ImgLoad;





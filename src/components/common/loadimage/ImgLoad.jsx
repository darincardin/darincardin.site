import React from "react";

import 'jquery-plugins1/dist/loadimage.js';
import 'jquery-plugins1/dist/loadimage.css';

class ImgLoad extends React.Component{

	constructor(props){
		super(props);	
		this.elem = React.createRef();
	}

	componentDidMount(){     

        $(this.elem.current).loadimage( this.props.style );
	}

	render() {
		return ( <div ref={this.elem} name={this.props.name} src={this.props.src} title={this.props.title} newtab={this.props.newTab?"1":""} desc={this.props.desc} href={this.props.href}></div> );
	}
}




export default ImgLoad;





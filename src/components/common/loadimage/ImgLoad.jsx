import {Component} from "preact";
import React from "react";

import 'loadimage/dist/css/loadimage.css';

require('loadimage/src/js/loadimage.js');  




class ImgLoad extends Component{

	constructor(props){
		super(props);	
		this.elem = React.createRef();
	}

	componentDidMount(){     

        $(this.elem.current).loadimage( {style:{transition:`opacity ${this.props.wait}s`} });
	}

	render() {
		return ( <div ref={this.elem} {...this.props} >{this.props.children}</div> );
	}
}




export default ImgLoad;





import {Component} from "preact";
import React from "react";



import $ from 'jquery';

import 'loadimage/dist/css/loadimage.css';
require('loadimage/dist/js/loadimage.js');  




class AsyncImage extends Component{

	constructor(props){
		super(props)	
		this.elem = React.createRef();
	}

	componentDidMount(){
		$(this.elem.current).loadimage();
	}


	render() {
		return ( <div ref={this.elem} {...this.props} /> );
	}
}




export default AsyncImage;





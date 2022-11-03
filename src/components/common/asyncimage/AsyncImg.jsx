import {Component} from "preact";
import React from "react";


import 'asyncimage/dist/css/asyncimage.min.css';

import $ from 'jquery';


require('asyncimage');  




class AsyncImage extends Component{

	constructor(props){
		super(props)	
		this.elem = React.createRef();
	}

	componentDidMount(){
		$(this.elem.current).asyncimage();
	}


	render() {
		return ( <div ref={this.elem} {...this.props} /> );
	}
}




export default AsyncImage;





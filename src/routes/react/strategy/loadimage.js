import { Component } from 'preact';
import ImgLoad from '../../../components/common/loadimage/ImgLoad.jsx'   


import 'loadimage/dist/css/loadimage.css';
require('loadimage/dist/js/loadimage.js');  


class Widget extends Component{
	
	path =  "/assets/photos/utah.jpg?v=" + parseInt(Math.random()*10000);

	constructor(){
		super();
			console.log('aaa');
	}
	
	componentDidMount(){

		$('.imgA').loadimage({width:"150px", height:"118px"});
		$('.imgB').loadimage();
	}


	render = () => (
		<div style={{ position: 'relative', zIndex:'5', borderRadius: '5px', margin:'20px auto'}}>
			
			<br />
			<div name="imgA" className="imgA loadimage-example" src={this.path}  >257k image</div>
			&nbsp;
			<div name="imgB" className="imgB loadimage-example" src="dummy.jpg"  >broken image</div>
			<br /><br />
		</div>
	)
}




export default {
	widget: Widget,
	title: "Load Image",
	path: "/react/loadimage",
	url:"https://github.com/darincardin/loadimage",
    code: 
`<div width="150px" height="118px" className="photo" src="/assets/me1.jpg" />
   
$(this.elem.current).loadimage();`,  
    text: `
	<div>
		This JQuery plugin will load an image asynchronously using a setTimeout:							
		<ul>
			<li>Spinner icon displayed during image load.</li>
			<li>Error icon displayed on failure.</li>
		</ul>
	</div>`
}





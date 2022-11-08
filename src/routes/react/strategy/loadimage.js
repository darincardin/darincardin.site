import { Component } from 'preact';
import AsyncImg from '../../../components/common/asyncimage/AsyncImg.jsx'   


import 'loadimage/dist/css/asyncimage.css';
require('loadimage/dist/js/asyncimage.js');  


class Widget extends Component{
	
	path =  "/assets/utah.jpg?v=" + parseInt(Math.random()*10000);


	render = () => (
		<div style={{ position: 'relative', zIndex:'5', borderRadius: '5px', padding: '20px', background: 'white', margin:'20px auto'}}>
			
			<AsyncImg  className="loadimage-example" src={this.path}  />
		</div>
	)
}




export default {
	widget: Widget,
	title: "Load Image",
	path: "/react/loadimage",
	url:"https://github.com/darincardin/loadimage",
    code: 
`<div width="300px" height="236px" className="photo" src="/assets/me1.jpg" />

$(this.elem.current).asyncimage();`, 
    text: `
	<div>
		This JQuery plugin will load an image asynchronously using a setTimeout:							
		<ul>
			<li>Spinner icon displayed during image load.</li>
			<li>Error icon displayed on failure.</li>
		</ul>
	</div>`
}





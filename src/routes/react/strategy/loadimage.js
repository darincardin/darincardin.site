import { Component } from 'preact';
import ImgLoad from '../../../components/common/loadimage/ImgLoad.jsx'   


import 'loadimage/dist/css/loadimage.css';
require('loadimage/dist/js/loadimage.js');  


class Widget extends Component{
	
	path =  "/assets/utah.jpg?v=" + parseInt(Math.random()*10000);

	constructor(){
		super();
			console.log('aaa');
	}
	
	componentDidMount(){
		console.log('bbb');
		$('.aaa').loadimage();
		$('.bbb').loadimage();
	}


	render = () => (
		<div style={{ position: 'relative', zIndex:'5', borderRadius: '5px',  background: 'white', margin:'20px auto'}}>
			
			
			<div  className="aaa loadimage-example" src={this.path}  >257k image</div>
			<br /><br />
			<div  className="bbb loadimage-example" src="dummy.jpg"  >broken image</div>
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





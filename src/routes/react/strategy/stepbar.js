import { Component } from 'preact';

import Stepbar from 'stepbar/src/StepBar/StepBar.jsx'; 

								

class Widget extends Component{
	
	 state = { step:0 };
	
	 array = [
		{label:"Step 1"},
		{label:"Step 2"},
		{label:"Step 3"}
	]
	
	
	 change = ()=>{
		var next =  this.state.step<2 ? ++this.state.step : 0;
		
		this.setState({step: next});
	}	
	

	
	render = () => (
		<div style={{width:'300px', position: 'relative', zIndex:'5',borderRadius: '5px', padding: '20px', background: 'white', margin:'20px auto'}}>
			<Stepbar index={this.state.step} array={this.array} />
			<br />
			<button onClick={this.change} className="btn btn-primary">Next Step</button>
		</div>
	)
}

export default {
	widget: Widget,
	path: "/react/step",
	url:"https://github.com/darincardin/stepbar",
    code: 
`var state = {step:0};
			
var array = [ {label:"Step 1"},  {label:"Step 2"}, {label:"Step 3"} ];
				
<StepBar index={state.step} array={array}/>`,
  
    text: "Step Bar widget shows the users progress in a multistep situation."
	
}





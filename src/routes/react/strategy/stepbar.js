import { Component } from 'preact';
							

import StepBar from 'stepbar';



class Widget extends Component{
	
	state = { step:1 };
	array = ["A","B","C", "E"];	
	
	change = ()=>{
		var next =  (this.state.step< this.array.length) ? ++this.state.step : 1;
		this.setState({step: next});
	
	}	
	
	render = () => (
		<div style={{ padding: '30px'}}>
			<StepBar index={this.state.step} array={this.array} />
			<br />
		
			<button onClick={this.change} className="btn btn-primary">Next Step</button>
		</div>
	)
}



export default {
	widget: Widget,
	title: "Step Bar",
	path: "/react/step",
	url:"https://github.com/darincardin/stepbar",
    code: `
var state = {step:1};			
var array = ["A","B","C", "E"];	
				
<StepBar index={state.step} array={array}/>`,
  
    text: "This React widget shows the users progress in a multistep situation."
	
}





import { Component } from 'preact';


import 'jquery-plugins1/dist/counter.js';
import 'jquery-plugins1/dist/counter.css';


class Widget extends Component{
	
	state = {increment:false}
	
	counter = null;	
	timer = null;
	
	componentDidMount = ()=>{		
		this.counter = $('.counter').counter();	
	}

	toggleIncrement = ()=>{
		this.setState({increment: !this.state.increment}, ()=>{
			
			if(this.state.increment) {
				this.counter.increment();
				this.timer = setInterval(this.counter.increment, 1000);					
			}
			else clearInterval(this.timer); 		
		})		
	}

	clear = ()=> {
		this.counter.clear();
	}

	set500 =()=>{
		this.counter.set(567);
	}


	render = () => (
		<div>
			<div class="counter" />
			
			<button onClick={this.toggleIncrement} className="btn btn-secondary" style={{width:'100px'}}>
				{this.state.increment?"Stop":"Increment"} 
			</button> &nbsp;
			
			<button onClick={this.clear}  className="btn btn-secondary" >Clear</button> &nbsp;
			<button onClick={this.set500} className="btn btn-secondary">Set 567</button> &nbsp;		
		</div>
	)
}




export default {
	widget: Widget,
	title: "Counter",
	path: "/react/counter",
	url:"https://github.com/darincardin/counter",
    code: `var counter = $('.counter').counter();`, 
    text: "This JQuery plugin can be incremented or set to a specific value."
}





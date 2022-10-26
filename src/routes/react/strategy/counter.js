import { Component } from 'preact';

class Widget extends Component{
	
	counter = null;	
	timer = null;
	
	componentDidMount = ()=>{		
		this.counter = $('.counter').counter();	
	}

	toggleIncrement = ()=>{
		if(this.timer) { clearInterval(this.timer); this.timer = null; }
		else this.timer = setInterval(this.counter.increment, 1000);		
	}

	clear = ()=> {
		this.counter.clear();
	}

	set500 =()=>{
		this.counter.set(500)
	}


	render = () => (
		<div style={{width:'400px', position: 'relative', zIndex:'5', borderRadius: '5px', padding: '20px', background: 'white', margin:'20px auto'}}>
			<div class="counter"></div>
			
			<button onClick={this.toggleIncrement} className="btn btn-secondary">Toggle Increment</button> &nbsp;
			<button onClick={this.clear}  className="btn btn-secondary" >Clear</button> &nbsp;
			<button onClick={this.set500} className="btn btn-secondary">Set 500</button> &nbsp;
			
		</div>
	)
}




export default {
	widget: Widget,
	path: "/react/counter",
	url:"https://github.com/darincardin/counter",
    code: `var counter = $('.counter').counter();`, 
    text: "Counter can be incremented or set to a specific value."
}





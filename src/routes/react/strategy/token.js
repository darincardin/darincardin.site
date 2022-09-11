import { Component } from 'preact';
import Tokenizer from 'tokenizer/src/Tokenizer/Tokenizer.jsx'; 




class Widget  extends Component{
	
	state = {tokens: [] } ;
	
	change = (obj, next)=>{
		this.setState(obj, next);
	}	
	
	submit = ()=>{
		alert(this.state.tokens.join(', '))
	}
	
	render = ()=>(
		<div style={{width:'300px', margin:'20px auto'}}>
			<Tokenizer name="tokens" tokens={this.state.tokens} setState={this.change} /> 	
			<button onClick={this.submit} className="btn btn-primary">Submit</button>
		</div>
	)
}


export default {
	widget: Widget,
	path: "/react/token",
	url:"https://github.com/darincardin/tokenizer",
	code: `<Tokenizer name="tokens" tokens={this.state.tokens} setState={this.onChange}  />`,
	text: `					
	<div>
		Tokenizer widget creates tokens from your inputs.
		<ul>
			<li>Duplicate tokens are blocked</li>
			<li>Widget built with React and Bootstrap</li>
		</ul>					
	</div>`
	
}


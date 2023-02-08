import { Component } from 'preact';

//import Tokenizer from '../../../components/common/tokenizer/src/Tokenizer/Tokenizer.jsx'; 

import Tokenizer from 'tokenizer/dist/react/index.js'; 


class Widget  extends Component{
	
	state = {tokens: [] } ;
	
	t = ['ddddd']
	

	
	change = (obj, next)=>{
		this.setState(obj, next);
	}	
	
	submit = ()=>{
		alert(this.state.tokens.join(', '))
	}
	
	render = ()=>(
		<div>
			
			Enter token:
			<Tokenizer  tokens={this.state.tokens} setState={this.change} /> 	
			<br />
			
			<button onClick={this.submit} className="btn btn-primary">Report Tokens</button>
		</div>
	)
}


export default {
	widget: Widget,
	title: "Tokenizer",
	path: "/react/token",
	url:"https://github.com/darincardin/tokenizer",
	code: `<Tokenizer tokens={this.state.tokens} setState={this.onChange}  />`,
	text: `					
	<div>
		This React widget creates tokens from your inputs.
		<ul>
			<li>Duplicate tokens are blocked</li>
			<li>Widget built with React and Bootstrap</li>
		</ul>					
	</div>`
	
}


import React from 'react';


import {Tokenizer} from 'react-widgets7';

class Widget_Tokenizer  extends React.Component{
	
	state = {tokens: [] } ;
	
	t = ['ddddd']
	
	change = (obj, next)=>{
		this.setState(obj, next);
	}	
	
	submit = ()=>{
		alert(this.state.tokens.join(', '));
	}
	
	render = ()=>(
		<div>
			
			Enter token:
			<Tokenizer  tokens={this.state.tokens} setState={this.change} >
				<button className="btn btn-primary">Add</button>
			</Tokenizer> 	
			<br />
			
			<button onClick={this.submit} className="btn btn-primary">Show Tokens</button>
		</div>
	)
}


export default {
	widget: Widget_Tokenizer,
	title: "Tokenizer",
	path: "/react/token",
	url:"https://github.com/darincardin/react-widgets/tree/master/tokenizer",
	code: `<Tokenizer tokens={this.state.tokens} setState={this.onChange}  />`,
	text: `					
	<div>
		This React widget creates tokens from your inputs:
		<ul>
		
			<li>Field attached to the React state</li>
			<li>Tokens can be added and deleted</li>
			<li>Duplicate tokens are blocked</li>
			<li>Widget built with React and Bootstrap</li>
		</ul>					
	</div>`
	
}


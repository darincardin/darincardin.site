import { Component } from 'preact';

//import Tokenizer from '../../../components/common/tokenizer/src/Tokenizer/Tokenizer.jsx'; 

import Tokenizer from 'tokenizer/dist/react/index.js'; 
require(  'tokenizer/dist/jquery/js/index.js'); 

class Widget  extends Component{
	
	state = {tokens: [] } ;
	
	t = ['ddddd']
	
	componentDidMount(){
		
		$('#aaa').tokenizer({tokens:this.t});
	}
	
	
	change = (obj, next)=>{
		this.setState(obj, next);
	}	
	
	submit = ()=>{
		alert(this.state.tokens.join(', '))
	}
	
	render = ()=>(
		<div style={{width:'300px', margin:'20px auto'}}>
			<Tokenizer name="tokens" tokens={this.state.tokens} setState={this.change} /> 	
			
			<div id="aaa"></div>
			
			<button onClick={this.submit} className="btn btn-primary">Submit</button>
		</div>
	)
}


export default {
	widget: Widget,
	title: "Tokenizer",
	path: "/react/token",
	url:"https://github.com/darincardin/tokenizer",
	code: `<Tokenizer name="tokens" tokens={this.state.tokens} setState={this.onChange}  />`,
	text: `					
	<div>
		This widget creates tokens from your inputs.
		<ul>
			<li>Duplicate tokens are blocked</li>
			<li>Widget built with React and Bootstrap</li>
		</ul>					
	</div>`
	
}


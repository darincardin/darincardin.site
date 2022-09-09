import { Component } from 'preact';


import {useState } from "preact";

import Tokenizer from 'tokenizer/src/Tokenizer/Tokenizer.jsx'; 
import Form from 'form/src/Form/Form.jsx'; 
import Stepbar from 'stepbar/src/StepBar/StepBar.jsx'; 


//import {BrowserRouter, Switch, Redirect, DefaultRoute, Route, Link, withRouter} from "react-router-dom";

const newOrder = { id:"1", name:"", phone:"", amount:"", deliver: false}




class	GetForm extends Component {

	
	state = {object:{...newOrder}}
	
	 onSuccess = result => {
		var {name, phone, amount, deliver} = result;	
		alert(`Name: ${name}\n phone: ${phone}\n amount: ${amount}\n deliver: ${deliver}`)	
	}

	 fields = [ 
		{label:"Personal Info", name:"person-info", tag:"header"},
		{label:"Name",   		name:"name", tag:"text", required:true},
		{label:"Phone",  		name:"phone", tag:"phone", format:true},
		
		{label:"Order Info",    name:"order-info", tag:"header"},
		{label:"Amount",        name:"amount", tag:"number", required:true},
		{label:"Deliver",       name:"deliver", tag:"checkbox"}
	]

	render = ()=>{
		return (
			<>
				<div className="hidden-xs">
					<h3>Form</h3>
					<hr />				
				</div>
				<div style={{background: 'white', borderRadius:'10px', padding: '10px', margin:'auto', maxWidth:'450px'}}>
					<Form  object={this.state.object} fields={this.fields} onSuccess={this.onSuccess} >
						<button type="submit" className="btn btn-primary">Submit</button> 
					</Form>
				</div>
			</>
	)}
}
/*


*/


								

class GetStep extends Component{
	
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
	

	
	render = ()=>{
		return (
			<>
				<div className="hidden-xs">
					<h3>Step Bar</h3>
					<hr />				
				</div>

				<div style={{width:'300px', position: 'relative', zIndex:'5',borderRadius: '5px', padding: '20px', background: 'white', margin:'20px auto'}}>
					<Stepbar index={this.state.step} array={this.array} />
					<br />
					<button onClick={this.change} className="btn btn-primary">Next Step</button>
				</div>
				
				
			</>
	)}
}

class	GetTokenizer extends Component{
	
	state = {tokens: [] } ;
	
	change = (obj, next)=>{
		this.setState(obj, next);
	}	
	
	submit = ()=>{
		alert(this.state.tokens.join(', '))
	}
	
	render = ()=>{ 
		return(
			<>
				<div className="hidden-xs">
					<h3>Tokenizer</h3>
					<hr />				
				</div>

				<div style={{width:'300px', margin:'20px auto'}}>
					<Tokenizer name="tokens" tokens={this.state.tokens} setState={this.change} /> 	
					<button onClick={this.submit} className="btn btn-primary">Submit</button>
				</div>
			</>
	)}
}
//




export {GetForm, GetStep, GetTokenizer};



import React, {useState } from "react";
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

import Autocomplete from 'autocomplete'; 
import Tokenizer from 'tokenizer'; 
import Form from 'form'; 
import List from 'list'; 
import StepBar from 'stepbar'; 

import OrderAPI from '/js/orderAPI.js'


import {BrowserRouter, Switch, Redirect, DefaultRoute, Route, Link, withRouter} from "react-router-dom";

const newOrder = { id:"1", name:"", phone:"", amount:"", deliver: false}





var	GetForm =  ()=> {
	
	var [state, setState] = useState({object:{...newOrder}})
	
	var onSuccess = result=>{
		var {name, phone, amount, deliver} = result;	
		alert(`Name: ${name}\n phone: ${phone}\n amount: ${amount}\n deliver: ${deliver}`)	
	}

	var fields = [ 
		{label:"Personal Info", name:"person-info", tag:"header"},
		{label:"Name",   		name:"name", tag:"text", required:true},
		{label:"Phone",  		name:"phone", tag:"phone", format:true},
		
		{label:"Order Info",    name:"order-info", tag:"header"},
		{label:"Amount",        name:"amount", tag:"number", required:true},
		{label:"Deliver",       name:"deliver", tag:"checkbox"}
	]

	return (
			<>
				<div className="hidden-xs">
					<h3>Form</h3>
					<hr />				
				</div>
				<div style={{background: 'white', borderRadius:'10px', padding: '10px', margin:'auto', maxWidth:'450px'}}>
					<Form  object={state.object} fields={fields} onSuccess={onSuccess} >
						<button type="submit" className="btn btn-primary">Submit</button> 
					</Form>
				</div>
			</>
	)
}

/*


*/

class GetList extends React.Component {
	
	state = {data:[]  }
	
	labels = [
		{name:'ID',id:'id'},
		{name:'First Name',id:'fName'},
		{name:'Last Name',id:'lName'},
		{name:'Qty',id:'quantity'},
		{name:'Address',id:'address'}
	]
		
	getData = (page, sort, amount)=>{
		return OrderAPI.list(page, sort, amount).then(res=>{
			this.setState({ data:res.data })
			return res;
		})
	}

	render = ()=> {
		return (
			<>
				<div className="hidden-xs">
					<h3>List</h3>
					<hr />				
				</div>

				<List labels={this.labels} data={this.state.data} getData={this.getData} amount={5}   />	
			</>
		)
	}
}



var	GetOrderForm =  ()=> {
	
	var [state, setState] = useState({ tokens:[] })
	
	var change = (obj, next)=>{
		setState(obj, next);
	}	
	
	var submit = ()=>{
		alert(state.tokens.join(', '))
	}
	
	return (
			<>
				<div className="hidden-xs">
					<h3>Order Form</h3>
					<hr />				
				</div>

				<div style={{width:'300px', margin:'20px auto'}}>
					test
				</div>
				
				
			</>
	)
}


								

var	GetStep =  ()=> {
	
	var [state, setState] = useState({ step:0 })
	
	var array = [
		{label:"Step 1"},
		{label:"Step 2"},
		{label:"Step 3"}
	]
	
	
	var change = ()=>{
		var next =  state.step<2 ? ++state.step : 0;
		
		setState({step: next});
	}	
	

	
	return (
			<>
				<div className="hidden-xs">
					<h3>Step Bar</h3>
					<hr />				
				</div>

				<div style={{width:'300px', position: 'relative', zIndex:'5',borderRadius: '5px', padding: '20px', background: 'white', margin:'20px auto'}}>
					<StepBar index={state.step} array={array}/>
					<br />
					<button onClick={change} className="btn btn-primary">Next Step</button>
				</div>
				
				
			</>
	)
}


var	GetTokenizer =  ()=> {
	
	var [state, setState] = useState({ tokens:[] })
	
	var change = (obj, next)=>{
		setState(obj, next);
	}	
	
	var submit = ()=>{
		alert(state.tokens.join(', '))
	}
	
	return (
			<>
				<div className="hidden-xs">
					<h3>Tokenizer</h3>
					<hr />				
				</div>

				<div style={{width:'300px', margin:'20px auto'}}>
					<Tokenizer name="tokens" tokens={state.tokens} setState={change} /> 	
					<button onClick={submit} className="btn btn-primary">Submit</button>
				</div>
				
				
			</>
	)
}


class GetAutocomplete extends React.Component{
	
	state= { autocomplete:"" }
	
	change = (obj, next)=>{
		this.setState(obj, next);
	}	
	
	 suggestions = value=>{
	    //return fetch(`http://api.darincardin.com/php/orders/search.php?value=${value}`, {method:"GET"});
	   
	   
	   	return fetch(`http://api.darincardin.com/php/orders/controllers/search.php?value=${value}`, {method:"GET"})
		.then(res => res.json())
		.then( res =>{
			res.data = res.data.map(i =>i.lName);
			return res
		})
	}
	
	 onSuccess = result=>{	
		alert(this.state.autocomplete)	
	}
	
	render = ()=>{
	return (
			<>
				<div className="hidden-xs">
					<h3>Autocomplete</h3>
					<hr />				
				</div>
				<div style={{width:'300px', margin:'20px auto'}}>
					<Autocomplete name="autocomplete" value={this.state.autocomplete} setState={this.change} getSuggestions={this.suggestions} />
					<button className="btn btn-primary" onClick={this.onSuccess}> Submit </button>
				</div>	
			</>
		)
	}
}




export {GetForm, GetList, GetStep, GetTokenizer, GetOrderForm, GetAutocomplete};



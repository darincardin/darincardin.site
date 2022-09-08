import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, NavLink, Switch, Redirect, DefaultRoute, Route, Link, withRouter} from "react-router-dom";
import {GetForm, GetList, GetTokenizer, GetOrderForm, GetStep} from './Demo.jsx'
import Navigation from './Navigation.jsx'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import OrderAPI from '/js/orderAPI.js'



import './styles.scss';


class Code extends React.Component  {
	

	form_string = 
`const fields = [
  {label:"Personal Info", tag:"header"},
  {label:"First Name", name:"fName",   tag:"text"},
  {label:"Last Name",  name:"lName",   tag:"text"},
  {label:"Phone",      name:"phone",   tag:"phone", format:true},
]

<Form  onSuccess={this.onSuccess} object={this.state.order}   fields={this.fields}>
  <button type="submit" className="btn btn-primary">Submit</button> 
</Form>
`	


	autocomplete_string = 
`var suggest = value=>{
  return fetch('http://example.php?value=' +value, {method:"GET"});
}	

<Autocomplete name="a" value={state.val} setState={change} getSuggestions={suggest} />
`

	step_string = 
`var state = {step:0}
	
var array = [
	{label:"Step 1"},
	{label:"Step 2"},
	{label:"Step 3"}
]
	
<StepBar index={state.step} array={array}/>`


	list_string= 
`var state = { data:[] }	
	
var getData = (page, sort, amount)=>{	
  return OrderAPI.list(page).then(res=>{
    this.setState({ data:res.data })
    return res;
  })
}
  
<List data={state.data} getData={getData}   />	
`
	
	View1 = ()=>(
		<Switch>
			<Route path="/code/form" >
				<div>		
					<div>
					
						The form is built from an array of fields that you define.
						
						<ul>
							<li>Error validation triggered on submit</li>
							<li>Focus triggers a tooltip with error message</li>
							<li>Widget built with React and Bootstrap</li>
						</ul>
						
					</div>
			
						
					<SyntaxHighlighter language="javascript" style={docco}>
						{this.form_string}
					</SyntaxHighlighter>
	
				</div>
				<a target="_blank" href="https://github.com/darincardin/form" >GitHub</a>
			</Route>	  
			
			<Route path="/code/list" >
				<div>
						List widget that displays data from an API. 
						<ul>
							<li>Supports sorting and paging</li>
							<li>List populated from a Javascript Promise</li>
							<li>List size can be hardcoded or auto-generated from screensize</li>
							<li>Supports optional <b>Actions</b> columns with links</li>
							<li>Widget built with React and Bootstrap</li>
						</ul>				
				</div>
				<SyntaxHighlighter language="javascript" style={docco}>
					{this.list_string}
				</SyntaxHighlighter>		
				<a target="_blank" href="https://github.com/darincardin/list" >GitHub</a>			
			</Route>	
			
			<Route path="/code/token" >
				<div>
					<div>
						Tokenizer widget creates tokens from your inputs.
						<ul>
							<li>Duplicate tokens are blocked</li>
							<li>Widget built with React and Bootstrap</li>
						</ul>					
					</div>
	
					<SyntaxHighlighter language="javascript" style={docco}>
						{`<Tokenizer name="tokens" tokens={this.state.tokens} setState={this.onChange}  />`}
					</SyntaxHighlighter>
				</div>
				<a target="_blank" href="https://github.com/darincardin/tokenizer" >GitHub</a>	
			</Route>	
			
			<Route path="/code/step" >
				<div>
					<div>
						 Step Bar widget shows the users progress in a multistep situation.
						<br /> <br />
					</div>				
	
					<SyntaxHighlighter language="javascript" style={docco}>
						{this.step_string}
					</SyntaxHighlighter>
				</div>
				<a target="_blank" href="https://github.com/darincardin/stepbar" >GitHub</a>
			</Route>	
			
			<Route path="/code/autocomplete" >
				<div>
					<div>
						Autocomplete widget gives suggestions based on the text entered.
						<ul>
						
							<li>As text is typed, results are populated in the dropdown</li>
							<li>Data retrieved from a Javascript Promise</li>
							<li>Code waits two second before triggering call</li>
							<li>Widget built with React and Bootstrap</li>
						</ul>					
					</div>				
	
					<SyntaxHighlighter language="javascript" style={docco}>
						{this.autocomplete_string}
					</SyntaxHighlighter>
				</div>
				<a target="_blank" href="https://github.com/darincardin/autocomplete" >GitHub</a>
			</Route>			
			
			<Redirect from="/code" to="/code/form" />	
		</Switch>	
	)
	
	View2 = ()=>(
		<Switch>
			<Route path="/code/form"  component={GetForm} />
			<Route path="/code/list"  component={GetList} />
			<Route path="/code/token" component={GetTokenizer} />	
			<Route path="/code/step"  component={GetStep} />
			<Route path="/code/orderform" component={GetOrderForm} />	
			<Redirect from="/code" to="/code/form" />	
		</Switch>	
	)
	

	render = () =>{
		
		var View1 = this.View1;
		var View2 = this.View2;		
				
		return (
			<>
				<div className="animated fadeIn code-bg"></div>
				<div className="animated fadeIn" id="code">
					
					<BrowserRouter>	
							<div  className="container">

								<div className="row">
										<div className="samples" >
											<div className=" col-xs-12 col-sm-6" >
												<Navigation />
												<div  className="description" ><View1 /></div>
											</div>
											<div className="example col-xs-12 col-sm-6">
												<View2 />
											</div>
										</div>
										
								</div>
							</div>	
					</BrowserRouter>	
				
				</div>
			</>
		);
	}
}


export default Code;

	//componentWillReceiveProps(props) {
		//this.setState({object:props.object, submitted:false});
	//}


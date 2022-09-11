import { Component } from 'preact';
import Form from 'form/src/Form/Form.jsx'; 


const newOrder = { id:"1", name:"", phone:"", amount:"", deliver: false}




class	Widget extends Component {

	
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

	render = ()=>(
		<div style={{background: 'white', borderRadius:'10px', padding: '10px', margin:'auto', maxWidth:'450px'}}>
			<Form  object={this.state.object} fields={this.fields} onSuccess={this.onSuccess} >
				<button type="submit" className="btn btn-primary">Submit</button> 
			</Form>
		</div>
	)
}






export default {
	widget: Widget,
	path: "/react/form",
	url:"https://github.com/darincardin/form",
	code: 
`const fields = [
  {label:"Personal Info", tag:"header"},
  {label:"First Name", name:"fName",   tag:"text"},
  {label:"Last Name",  name:"lName",   tag:"text"},
  {label:"Phone",      name:"phone",   tag:"phone", format:true},
]
	
<Form  onSuccess={this.onSuccess} object={this.state.order}   fields={this.fields}>
	<button type="submit" className="btn btn-primary">Submit</button> 
</Form>`,

	text:`
	<div>
	The form is built from an array of fields that you define.
						
	<ul>
		<li>Error validation triggered on submit</li>
		<li>Focus triggers a tooltip with error message</li>
		<li>Widget built with React and Bootstrap</li>
	</ul>
	</div>
	`
	
}









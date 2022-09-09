export default {
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


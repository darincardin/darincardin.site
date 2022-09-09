export default {
	path: "/react/step",
	url:"https://github.com/darincardin/stepbar",
    code: 
`var state = {step:0}
				
var array = [
  {label:"Step 1"},
  {label:"Step 2"},
  {label:"Step 3"}
]
				
<StepBar index={state.step} array={array}/>`,
  
    text: "Step Bar widget shows the users progress in a multistep situation."
	
}



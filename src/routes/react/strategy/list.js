import React from 'react';

				
import {List} from 'react-widgets7';

var DATA = [{fName:"Alan", lName:"Red"},
		{fName:"Zora", lName:"Green"}, 
		{fName:"Kellie", lName:"Jean"}, 
		{fName:"Don", lName:"Jack"}, 
		{fName:"Lisa", lName:"Jones"}, 
		{fName:"Craig", lName:"Jeffery"}, 
		{fName:"David", lName:"Jones"}, 
		{fName:"Dennis", lName:"Gens"}, 
		{fName:"Rick", lName:"Prince"}, 
		{fName:"Henry", lName:"Smith"}, 
		{fName:"Joe",lName:"Rickson"}] 


class Widget_List extends React.Component{
		
	state = {data :[]}	
	
	columns = [
		{name:'First Name', id:'fName'},
		{name:'Last Name', id:'lName'}
	]
	
	hello =   ()=>{
		alert('Placeholder');
		return Promise.resolve();
	}

		
	getData = (page, sort, amount, search)=>{
								
		var data = [...DATA];

		data = data.filter(i=>{	
			search = search.toLowerCase();
				
			return (i.fName.toLowerCase().indexOf(search) >-1 || i.lName.toLowerCase().indexOf(search)>-1);
		})

		data.sort(function(i,j){		
			var x = i[sort.by] > j[sort.by] ?1:-1;
			return (sort.dir=="ASC"?x: -1*x) 
		})
	
		var total = data.length;
	
		data = data.splice(page*amount, amount);
		
		
		
		this.setState({data:data})
		return Promise.resolve({total:total})
	}			
		


	render = () => (
		<div style={{height: '260px', margin: '10px', padding:'0'}}>
		
			<List labels={this.columns} data={this.state.data} getData={this.getData} >	
				<a name="delete" onClick={this.hello}>Delete</a>
			</List>		
			
	
		</div>
	)
}



export default {
	widget: Widget_List,
	title: "List",
	path: "/react/list",
	url:"https://github.com/darincardin/react-widgets/tree/master/list",
    code: 
`var state = {step:1};			
var array = ["A","B","C", "E"];	
				
<StepBar index={state.step} array={array}/>`,
  
    text: `<div>   
	    This React widget displays an array of data. The list features:
	   	<ul>
			<li>Bidirectoral, sortable headers</li>
			<li>Search bar</li>
			<li>Pagination</li>
			<li>Auto-sizing based on avaiable height</li>
			<li>Action links can be passed in as child elements</li>
			<li>Client-side caching of the page state</li>
		</ul>     
    </div>`
	
}





import React from "react";

import AsyncImage from '../../components/AsyncImage/AsyncImage.jsx'   

import style from './style.css';

//import style from './style.scss';

var Home = props => {
  
	var primary = [		
		//{name:'Total Exp', years:[1,1,1,1,1,1,1,1,1]},
		{name:'Angular', years:[1,1,1,1]},
		{name:'React', years:[1]},
		{name:'JQuery', years:[1,1,1]},
		{name:'NodeJS', years:[1,1,1]},		
		{name:'Java', years:[1,1,1]},		
		{name:'Spring', years:[1,1]},		
		{name:'Docker', years:[1]},				
	]

	var Skill = (props)=> (
		
		<div className={style.skill}>
			<h4><b>{props.title}</b></h4>
			<table >
				<thead>
					<tr>
						<td>Skill</td><td>Years</td>
					</tr>
				</thead>
				<tbody>
					{props.data.map((v,i)=>(
						<tr key={i}>
							<td>{v.name}</td>
							<td> 
							{ v.years.map((vv,ii)=> (<i key={ii} className="glyphicon glyphicon-stop red"></i>))}						
							</td>
						</tr>				
					))}
				</tbody>
			</table>
		</div>
	)

	return (
		
		
			<div  id="home" className=" animated fadeIn" >
				<div className="container"   >
					<div className="row test-margin">
						<div className="col-xs-12 col-sm-9 col-md-10 ">
		
							<h3>About Me</h3>
							<hr />	
			
			
							<AsyncImage width="300px" height="236px" className="photo" src="assets/me1.jpg" />
					
							<p> 
								I've been a software engineer for nine years. I've worked at companies of all sizes, including Microsoft, Alitsource, and 
								Soteria Networks.
							</p>
							<p>
							
								My current focus is client-side frameworks such as React and Angular. I've used these for a total of five years. 
								I have experience with best practices such as design patterns, web optimization, 
								use of third-party libraries, etc.
							</p>					
							<p>I live in the Boston area, and am looking for a remote, mid-level React or Angular position.
							<br/>
							</p>	
						
						</div>	
						<div className="col-xs-12 col-sm-3 col-md-2 ">
								
							<h3>Skills</h3>
							<hr />	
							<div>
								<Skill data={primary} />
	
								<br /><br />										
							</div>
							
						</div>	
					</div>	

					
				</div>
			</div>
		
	);
}


export default Home;

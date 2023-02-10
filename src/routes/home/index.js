import {Component} from 'preact'


import  './styles.scss';

import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   


class Home extends Component {

	static loaded = false

	constructor(props){
		super(props)
	}

	componentDidMount(){
		Home.loaded = true;
	}

	primary = [		
		{name:'Angular', years:[1,1,1,1]},
		{name:'React', years:[1]},
		{name:'JQuery', years:[1,1,1]},
		{name:'NodeJS', years:[1,1,1]},		
		{name:'Java', years:[1,1,1]},		
		{name:'Spring', years:[1,1]},		
		{name:'Docker', years:[1]},				
	]

    Skill = ()=> (
		
		<div name="skill">
			<table >
				<thead>
					<tr>
						<td>Skill</td><td>Years</td>
					</tr>
				</thead>
				<tbody>
					{this.primary.map((v,i)=>(
						<tr key={i}>
							<td>{v.name}</td>
							<td> 
							{ v.years.map((vv,ii)=> (	<i key={ii} name="sq" className="glyphicon glyphicon-stop red"></i>))}					
							</td>
						</tr>				
					))}
				</tbody>
			</table>
		</div>
	)

	render = ()=> {
		var Skill = this.Skill;
		
		return (
		
		
			<div  name="home" className="animated fadeIn" >
			
			    <ImgLoad name="background-image" wait={Home.loaded?0:4}   src="assets/photos/home1.jpg"   />  
			    
			 				
				<div className="container-fluid g-0"   >
				   <div className="row">
				
						<div className="col-12 col-sm-8 offset-sm-4 ">
							<div name="card1">
								<div className="row ">
									<div className="col-12">
									
										<h1 class="short">About Me</h1>
										<hr class="short" />
										<p> 
									
											Hi, my name is Darin Cardin, and this is my personal website.
											
											I have a range of interests, such as computers, hiking, photography, exercise, and fixing things in general. I love to travel, especially cross country road trips. 
											
											</p>
											<p>
											I've been interested in programming since high school. I graduated from college in 2006, obtaining a Bachelor's degree in Computer Science.
											Shortly after, I took my first job as a junior developer and have been with the field ever since.

										</p>
														
									 
									</div>
								</div>
							
								<div className="row ">
									<div className=" col-12 col-md-4 ">
										<h1>Skills</h1>
										<hr class="short" />
										<Skill/>							
									</div>
									
									<div className="col-12 col-md-8 ">
										<h1>Work Experience</h1>
										<hr class="short" />							
										<p>	
										
											I've been a software engineer for nine years. I started my career using Java/JSP on the back-end. But I quickly transitioned to the front-end, using mainly jQuery.
											I moved on the Javascript frameworks, such as Angular and React. 
										
										</p>
										<p>
										
											Though I focus on Java/Javascript , I've dipped my hand in a range of other tools, such as database and build technologies.
								
											My current focuses are the React and Angular frameworks. I also enjoy using Wix and Shopify. I feel I bring a unique skill set to the table, having knowledge with website building tools and traditional coding. 
										
										</p>
									</div>
								</div>
								
								
								
								
								
							</div>
						</div>	
					</div>	

					
				</div>
			</div>
		
		);
	}
}


export default Home;
//v
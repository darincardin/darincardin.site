
import  './styles.scss';

//import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   





var Home = props => {
  

	var primary = [		
		{name:'Angular', years:[1,1,1,1]},
		{name:'React', years:[1]},
		{name:'JQuery', years:[1,1,1]},
		{name:'NodeJS', years:[1,1,1]},		
		{name:'Java', years:[1,1,1]},		
		{name:'Spring', years:[1,1]},		
		{name:'Docker', years:[1]},				
	]

	var Skill = (props)=> (
		
		<div name="skill">
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
							{ v.years.map((vv,ii)=> (	<i key={ii} name="sq" className="glyphicon glyphicon-stop red"></i>))}					
							</td>
						</tr>				
					))}
				</tbody>
			</table>
		</div>
	)



	return (
		
		
			<div  name="home" className="animated fadeIn" >
			
			
				<img  name="background-image" src="assets/photos/home1.jpg" />
				<div className="container-fluid"   >
				   <div className="row ">
				
					    <div className="col-4 d-none d-sm-block"></div>
					
						<div className="col-12 col-sm-8">
							<div name="card1">
								<div className="row ">
									<div className="col-12">
									
										<h1 class="short">About Me</h1>
										<hr class="short" />
										<p> 
									
											Hello, my name is Darin Cardin. New Bedford Massachusetts is my home, I've lived here my whole live. I love to travel, and 
											go on a 3 month cross country trip every couple years. I have a range of interests, such as computers, hiking, photography, exercise, and fixing things in general.
											
											</p>
											<p>
											I've been interested in programming since highschool. I graduated from college in 2006, obtaining a Bachelor's degree in Computer science.
											Shortly after, I took my first job as an intern developer and have been with the field ever since.

										</p>
														
									 
									</div>
								</div>
							
								<div className="row ">
									<div className=" col-12 col-md-5">
										<h1>Skills</h1>
										<hr class="short" />
										<Skill data={primary} />							
									</div>
									
									<div className="col-12 col-md-7">
										<h1>Work Experience</h1>
										<hr class="short" />							
										<p>	
										
										I've been a software engineer for nine years. I've worked at companies of many sizes, including Microsoft, Alitsource, and Soteria Networks.
										Most of my career has been on the front end, using Frameworks like Angular and React.
										
										
										
										</p>
										<p>	
											My current focus are the Wix and Shopify platform. I feel that I bring a unique skillset to the table, having knowledge with website building tools and traditional coding. 
										
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


export default Home;
//v
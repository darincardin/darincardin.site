
import './styles.scss';



	var Summary = ()=> (
		<>

			<section  className="summary">
				<h3 >Summary</h3>  
				<section>
					I'm a web engineer with nine years of experience. I am seeking a position as either a front-end or full-stack web developer.
				
					
					<ul>										
						<li className="ital">React 16, Angular 10, AngularJS, JQuery, AJAX, JavaScript, TypeScript, Jest</li>
						<li className="ital">Java, Spring Boot, MySQL, Docker</li>
						<li className="ital">Intellij, Eclipse, GIT,  JIRA, Fiddler, NodeJS, Tomcat, Apache</li>
					</ul>			
				
				</section>
			</section>		
		</>						
	)

	var Experience = props => {
		
		return (
			<tr>
				<td class="d-none d-sm-block">
					<h5>{props.title}</h5>
					{props.date}
				</td>
				<td>
					<h5  class="d-block d-sm-none">{props.name}</h5>
					{props.children}
				</td>
			</tr>				
		)
	}


var Resume = props => {

	return (
		
		<div  name="resume" className=" animated fadeIn" >

				<div className="container-fluid g-0" >
				
						<div className="row">
							<div className="col-xs-12">
							<div name="card-center">
								
									<Summary />
									
									<section  className="experience">
										
										<h3>Experience</h3>    
										<table>
											<Experience name="" date="1 year" address="" title="Full Stack Developer"  >
										
												<div>
											Developed a website that accepted orders for a fundraiser; included an administration section where orders could be viewed, edited or deleted
												</div>
												<ul>   
													<li>Developed website using React, PHP and MySQL</li>
													<li>Built application using NodeJS, Webpack and Babel </li>
													<li>
														 <a target="_blank" href="http://demo.darincardin.site">Order Form Demo</a>		
														 &nbsp; &nbsp;
														 <a target="_blank" href="http://demo.darincardin.site/login.html">Admin Page Demo</a>
													</li>
												</ul>
											</Experience>
																			
																			
											<Experience name="" date="2 years" address="" title="Web Developer" >
										
												<div>
						Developed an online inventory application for a Chinese metal cutting company; application allowed tools to be registered, reserved and reordered from a central location; system included an IAM component to manage users
												</div>
												<ul>   
													<li>Coded the front-end using Angular 10,  Spring Boot, MySQL and Docker</li>
													<li>Used design patterns to improve code base(Template, Strategy, Singleton, etc)</li>
	
													<li>Used NodeJS and Webpack to build application</li>
													<li>Some experience with React</li>
												</ul>
											</Experience>							
			
			
											<Experience name="" date="2 years" address="" title="Web Developer" >
											
												<div>
							Built an Identity and Access Management web application that granted access to our other products; users would be created and granted permissions based on their needs
												</div>
												<ul>   
													<li>Coded website using AngularJS, Kendo, Bootstrap and CSS </li>
													<li>Promoted to a lead position; responsibilities included ensuring deadlines were met, leading morning SCRUM, and managing JIRA board</li>
													<li>Used NodeJS to optimize code and speed up web load time</li>
													<li>Experience with SCRUM and development process</li>
												</ul>	
											</Experience>				
	
	
	
											<Experience name="" date="5 years" address="" title="Web Developer" >
											
												<div>
												Developed the web tier of an online system that auctioned television commercial space; users would bid on commercial slots based on the criteria they selected (target audience, price, time)
												</div>
												<ul>   
													<li>Developed code using Java/JSP, Struts, JSTL, JQuery, CSS, and HTML </li>
													<li>Experience with Agile; participated in estimation, development and testing phases of project</li>
													<li>Familiar with Eclipse, Firebug and Fiddler</li>
												</ul>	
											</Experience>		
										</table>
									</section>
									
									
									<section name="education">
										<h3>Education</h3>  
										<table>
											<Experience title="UMass Dartmouth" date="8 years" >
										
												<ul>   
													<li>BA in Computer Science </li>
													<li>Worked four years as an aide in the student computer labs (CITS Department) </li>
												</ul>	
											</Experience>			
										</table>					
									</section>
									
								</div>	
								
							</div>	
						</div>
						
					</div>
		</div>
					
		
		

		
		
		
		
		



	
	
	);
}

/*
			<div> <b>darinjaycardin@gmail.com</b> </div> 

			<div> 
				<a href="https://github.com/darincardin" target="_blank" >https://github.com </a> 
			</div> 
			<div> 
				<a href="https://www.linkedin.com/in/darin-cardin-23545079" target="_blank" >https://www.linkedin.com </a> 
			</div> 			
	

*/


export default Resume;

			
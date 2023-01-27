
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
						<td >	
							<h5>{props.name}</h5>
							{props.title}
						</td>
						<td>
							{props.children}
						</td>
					</tr>				
		)
	}


			

			





var Resume = props => {

	return (
		
		<div  name="resume" className=" animated fadeIn" >

				<div className="container" >
				
						<div className="row">
							<div className="col-xs-12">
							<div name="resume-border">
								<div name="resume-div">
								
									<Summary />
									
							
								
									<section  className="experience">
										
										<h3>Experience</h3>    
										<table>
											<Experience name="Saint Paul's Church" date="1 year" address="884 Kempton St, New Bedford, MA" title="Full Stack Developer"  >
										
												<div>
													Worked as a freelancer; developed a website that accepted orders for a fundraiser. 
													Site included an order form for the customer and an admin panel for the super user. 
													Website went live and processed roughly $3,000 worth of orders.
												</div>
												<ul>   
													<li>Developed website using React, PHP and MySQL</li>
													<li>Built application using NodeJS, Webpack and Babel </li>
													<li>
														Demo application 
														at <a href="http://demo.darincardin.infinityfreeapp.com" target="_blank" >http://demo.darincardin.infinityfreeapp.com</a> 
													 </li>
												</ul>
											</Experience>
																			
																			
											<Experience name="Soteria Networks" date="2 years" address="190 North Main St, Natick, MA" title="Web Developer" >
										
												<div>
													Worked at an eight person company; developed an online inventory application for a Chinese metal cutting company (XDC Industries). 
													Users would login through an SSO and be granted access to different areas of the site depending on their permissions. 
													Users would create/edit/assign objects that corresponded to their cutting workshop.
												</div>
												<ul>   
													<li>Coded the front-end using Angular 10,  Spring Boot, MySQL and Docker</li>
													<li>Used design patterns to improve code base(Template, Strategy, Singleton, etc)</li>
	
													<li>Used NodeJS and Webpack to build application</li>
													<li>Some experience with React</li>
												</ul>
											</Experience>							
			
			
											<Experience name="Altisource Labs" date="2 years" address="321 Summer St, Boston, MA" title="Web Developer" >
											
												<div>
													Worked as part of a six person team; developed an Identity and Access Management web application. 
													Users would login via a Shibboleth SSO and be redirect to one of several online tools. 
													Super users could create new users and assign them permissions.
												</div>
												<ul>   
													<li>Coded website using AngularJS, Kendo, Bootstrap and CSS </li>
													<li>Promoted to a lead position; responsibilities included ensuring deadlines were met, leading morning SCRUM, and managing JIRA board</li>
													<li>Used NodeJS to optimize code and speed up web load time</li>
													<li>Experience with SCRUM and development process</li>
												</ul>	
											</Experience>				
	
	
	
											<Experience name="Microsoft" date="5 years" address="1 Memorial Drive, Cambridge, MA" title="Web Developer" >
											
												<div>Worked as part of a twelve person team; developed the web tier of an online system that auctioned television commercial space</div>
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
											<Experience name="UMass Dartmouth" date="8 years" >
										
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

			
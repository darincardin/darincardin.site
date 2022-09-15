import React from "react";

//import './styles.scss';

var CaseStudy = props => {



	return (
		<>
		
			<div  id="home" className="animated fadeIn" >
				<div  className="container">
				
					
						<center>
						
						
							<h3>Case Study </h3>
							
							<h4><b>Saint Paul's Church Fundraiser</b></h4>
						</center>
					
			
					<br/>
					
										
					
					<h3>The Problem</h3>
					
					Saint Paul's Church runs a yearly fundraiser in which customers preorder lobster rolls.
					All the orders had to be taken over the phone.
					The church wished to have this process automated.
					
					
					
					<h3>The Solution</h3>
					
					My solution was to create a website for customers to place their orders.
					
					
					A form validates the data and passes it to a server/database.
					
					
					A super user could then log in and view/update the current orders. 
				
					I have incuded links to a demo of 
					the <a target="_blank" href="http://demo.darincardin.infinityfreeapp.com">form</a> and <a target="_blank" href="http://demo.darincardin.infinityfreeapp.com/login.html">admin section</a>.

					
					<br/><br/>
					The site had the following results:
					<ul>
					<li>Automatically processed $3,000 worth of orders</li>
					<li>Staff no longer needed to wait on phone calls </li>		
					<li>Staff now has a central place to store orders</li>
		
					
					
					
					</ul>
					
					<h3>Technical Details</h3>
					
					<ul>
						<li>Client: React</li>
						<li>Server: PHP</li>
						<li>Database: MySQL	</li>	
						<li>Build Tools: NodeJS + Webpack</li>	
				        <li>Host: GoDaddy	</li>								
					</ul>
					
	

					
				</div>
			</div>
		</>
	);
}


export default CaseStudy;


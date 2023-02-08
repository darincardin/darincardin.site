
import './styles.scss';

import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   

var CaseStudy = props => {



	return (
		<>
		
			<div  name="casestudy" className="animated fadeIn" >
				<div  className="container-fluid g-0">
				
					<div name="card-center" >
						<div  class="row" >
						
								<div class="col-12">
									<center>
										<h1>Case Study </h1>
										<h1><b>Saint Paul's Church Fundraiser</b></h1>
									</center>

								</div>
							
							
								
								<div  class="col-12">
								
								
										<h3>The Problem</h3>
									
										<ImgLoad name="img" width="300px" height="225px" className="photo" src="assets/photos/x-church.jpg" />
										
										Saint Paul's Church runs a yearly fundraiser in which customers preorder lobster rolls.
										All the orders had to be taken over the phone.
										The church wished to have this process automated.		
								
							
									    <h3>The Solution</h3>
										My solution was to create a website for customers to place their orders.
										A form validates the data and passes it to a server/database. A super user could then log in and view/update the current orders. 
				
										The site had the following results:
										<ul>
											<li>Automatically processed $3,000 worth of orders</li>
											<li>Staff no longer needed to wait on phone calls </li>		
											<li>Staff now has a central place to store orders</li>
										</ul>	
								</div>
						
								<div class="col-12   col-sm-6">
								
												<h3>Technical Details</h3>
												<ul>
													<li>Client: React</li>
													<li>Server: PHP</li>
													<li>Database: MySQL	</li>	
													<li>Build Tools: NodeJS + Webpack</li>	
											        <li>Host: GoDaddy	</li>								
												</ul>
							    </div>
							    
								<div class="col-12   col-sm-6">
							
												<h3>Demo Links</h3>
												<ul>
													<li><a target="_blank" href="http://demo.darincardin.site">Order Form </a> </li>
													<li><a target="_blank" href="http://demo.darincardin.site/login.html">Admin Panel</a></li>
												</ul>
									
								</div>
						</div>
						</div>
					</div>
					
				
			</div>
		</>
	);
}

/*




	


*/
export default CaseStudy;


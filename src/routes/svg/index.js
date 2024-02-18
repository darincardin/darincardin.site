import React from 'react';

import './styles.scss';


var SVG = props => {

	return (
		
		
				<div  name="svg"   className="container-fluid g-0 ">
					<div className="row g-0">
						<div className="col-12 ">
						
							<div style={{'textAlign':'center'}}>
								<div name="card-center"  style={{'textAlign':'left'}}>	
									<h3>SVG</h3> 
									<hr className="short"/>
									Below are several animated SVG images I have created for various projects.
								</div>
								
								<div name="card-no-border">					
									<img  src="../assets/svg/partouche.svg" />
								</div>
								
								<br />
								
								<div name="card-no-border">					
									<img  src="../assets/svg/rocket.svg" />
								</div>

								<br />	
								
								<div name="card-no-border">					
									<img  src="../assets/svg/tropic.svg" />
								</div>
								
								< br />	
								
								<div name="card-no-border">					
									<img  src="../assets/svg/name.svg"  style={{'background':'white','width':'100%','maxWidth':'500px','padding':'10px'}}/>
								</div>

							</div>
						</div>
					</div>	
				</div>

		
	);
}


export default SVG;

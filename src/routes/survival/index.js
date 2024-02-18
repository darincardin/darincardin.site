import React from 'react';

import Show from './Gallery.jsx'
import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   


class Survival extends React.Component {

	static loaded = false;

	componentDidMount(){
		Survival.loaded = true;
	}
	
	render(){
		
		var style ={
			height:'auto',
			width: 'auto',
			transition: `opacity ${Survival.loaded?0:4}s`
		}
		
		
		return (

			<div name="travel" className="animated fadeIn">
			

			
			    <ImgLoad name="background-image" style={style}  src="assets/photos/lizard.jpg" />
			    
				<div className="container-fluid g-0">
					<div className="row">
			
					
						<div className="col-12 col-sm-8 offset-sm-4 ">
							<div name="card1">
				
								<h1>Amateur Survival</h1>
								<hr className="short" />	
								<p>
									I'm an avid hiker, and have a uTube channel called <a className="lnk" target="_blank"  href="https://www.youtube.com/user/darincardin" >Amateur Survival</a> that follows my trips to different wilderness locations across the
									country. While on these trips, I demonstrate survival techniques that may be effective if you were ever lost.
									The techniques range from improvised fire making to edible cacti.
									<br /><br />
								
								</p>																
										
	

				
		
								<p>
								<Show></Show>
												
								</p>																
											
									
								<div>
					
								</div>		
															
							</div>
						
						</div>		
						

					</div>
				</div>
			</div>
		)
	}
}

export default Survival;


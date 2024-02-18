import React from 'react';

import Photos from './Photos.jsx'
import ImgLoad from '../../../components/common/loadimage/ImgLoad.jsx'   


class Travel extends React.Component {

	static loaded = false;

	componentDidMount(){
		Travel.loaded = true;
	}
	
	render(){
		
		var style ={
			height:'auto',
			width: 'auto',
			transition: `opacity ${Travel.loaded?0:4}s`
		}
		
		
		return (
			<div name="travel" className="animated fadeIn">
			
			    <ImgLoad name="background-image" style={style}  src="assets/photos/hills2.JPG" />
			    
				<div className="container-fluid g-0">

					
					
					<div className="row">
					
						<div className="col-12 col-sm-8 offset-sm-4 ">
							<div name="card1">
				
								<h1>Travel 2016</h1>

								<hr className="short" />									
								<p>
									I've done a fair amount of travel in the last ten year. I have the selfies to prove it!
	
								</p>
								<div>
									<Photos></Photos>
								</div>												
															
							</div>
						</div>		
					</div>			
					
					
					
				</div>
			</div>
		)
	}
}

export default Travel;


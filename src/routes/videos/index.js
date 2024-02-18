import React from 'react';

import Videos1 from './Videos.jsx'
import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'      


class Videos extends React.Component {

	static loaded = false;

	componentDidMount(){
		Videos.loaded = true;
	}
	
	render(){
		
		var style ={
			height:'auto',
			width: 'auto',
			transition: `opacity ${Videos.loaded?0:4}s`
		}
		
		
		return (
			<div name="travel" className="animated fadeIn">
			
			    <ImgLoad name="background-image" style={style}  src="assets/photos/hills2.JPG" />
			    
				<div className="container-fluid g-0">
					<div className="row">
					
						<div className="col-12 col-sm-8 offset-sm-4 ">
							<div name="card1">
								
								<h1>Videos</h1>
								<hr className="short" />	
								<p>
									 I've taken a lot of videos from my various adventures. Take a look!			
								</p>	
								
								<div>
									<Videos1></Videos1>
								</div>									
							</div>
						</div>		
					</div>
					
					
		
					
				</div>
			</div>
		)
	}
}

export default Videos;


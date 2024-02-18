import React from 'react';


import Gallery from './Gallery.jsx'
import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   


class Photography extends React.Component {

	static loaded = false;

	componentDidMount(){
		Photography.loaded = true;
	}
	
	render(){
		
		var style ={
			height:'auto',
			width: 'auto',
			transition: `opacity ${Photography.loaded?0:4}s`
		}
		
		
		return (
			<div name="other" className="animated fadeIn">
			
			    <ImgLoad name="background-image" style={style}  src="assets/photos/lizard.jpg" />
			    
				<div className="container-fluid g-0">
					<div className="row">
			
					
						<div className="col-12 col-sm-8 offset-sm-4 ">
							<div name="card1">
				
		
									
										
										
								<h1>Photography</h1>
								<hr className="short" />									
								<p>
										I started doing photography in 2019. I sell my photos 
										on <a target="_blank" className="lnk" href="https://www.shutterstock.com/g/Darin+Jay+Cardin"> Shutter Stock</a>.
										Here are some samples of my work.
								</p>
								<div>
									<Gallery  />
								</div>												
															
							</div>

						</div>		
					

					</div>
				</div>
			</div>
		)
	}
}

export default Photography;


/*



								
								
								

						<div className="col-xs-12  col-sm-7 photos">

									<h1>Photography</h1>
									<hr />									
									<p>
										I started doing photography in 2019. I sell my photos 
										on <a target="_blank" className="lnk" href="https://www.shutterstock.com/g/Darin+Jay+Cardin"> Shutter Stock</a>.
										Here are some samples of my work.
									</p>
									<div className="gallery gall__1">
										{this.gallery.map((v, i)=>
											<GalleryImg key={i} file={v} />
										)}
									</div>							
						</div>

*/
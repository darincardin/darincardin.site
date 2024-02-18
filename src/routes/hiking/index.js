import React from 'react';

//import Gallery from './Gallery.jsx'
import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   


class Hiking extends React.Component {

	static loaded = false;

	componentDidMount(){
		Hiking.loaded = true;
	}
	
	render(){
		
		var style ={
			height:'auto',
			width: 'auto',
			transition: `opacity ${Hiking.loaded?0:4}s`
		}
		
		
		return (
			<div name="travel" className="animated fadeIn">
			
			    <ImgLoad name="background-image" style={style}  src="assets/photos/lizard.jpg" />
			    
				<div className="container-fluid g-0">
					<div className="row">
			
					
						<div className="col-12 col-sm-8 offset-sm-4 ">
							<div name="card1">
				
								<h1>Hiking</h1>
								<hr className="short" />	

	

				
		
								<p>
									 I've taken a lot of videos from my various adventures. Take a look!
												
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

export default Hiking;
//<Gallery></Gallery>  

/*

		<iframe width="420" height="315" src="https://www.youtube.com/watch?v=uNOLkO4CH4Q"></iframe>
											<iframe width="420" height="315" src="https://www.youtube.com/watch?v=ewiKX3B41Js"></iframe>
											
											
											<iframe width="420" height="315" src="https://www.youtube.com/watch?v=M51-GIPVBIY"></iframe>
											<iframe width="420" height="315" src="https://www.youtube.com/watch?v=LfTbwg15tiI"></iframe>
											

								
								
								

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
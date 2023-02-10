import {Component} from "preact";

import './styles.scss';


import Gallery from './Gallery.jsx'
import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   


class Other extends Component {

	static loaded = false;




	componentDidMount(){
		Other.loaded = true;
	}
	
	render(){
		return (
			<div name="other" className="animated fadeIn">
			
			    <ImgLoad name="background-image" wait={Other.loaded?0:4}  src="assets/photos/lizard.jpg" />
			    
				<div className="container-fluid g-0">
					<div className="row">
			
					
						<div className="col-12 col-sm-8 offset-sm-4 ">
							<div name="card1">
				
								<h1>Hiking</h1>
								<hr class="short" />	
								<p>
									I'm an avid hiker, and have a uTube channel called <a className="lnk" target="_blank"  href="https://www.youtube.com/user/darincardin" >Amateur Survival</a> that follows my trips to different wilderness locations across the
									country. While on these trips, I demonstrate survival techniques that may be effective if you were ever lost.
									The techniques range from improvised fire making to edible cacti.
								</p>										
											
								<br />
								
								
									
										
										
								<h1>Photography</h1>
								<hr class="short" />									
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

export default Other;


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
import {Component} from "preact";

import './styles.scss';


import GalleryImg from './GalleryImg.jsx'

//import 'jquery.touch/jquery.touch.js'


//import '/js/touchTouch.jquery.js';
//import '/css/touchTouch.css';
//import './styles.scss';

class Other extends Component {


	xxgallery = ['bird']

	gallery = ['bird', 'birds', 'birds2','cat','clouds','duck','gator','hawk','lily1','lily2','lily3',
	           'lizard','moon','pink1','pink3','rabbit','red1','rocks','sea','stork','street',
	           'suncactus','sunset', 'yucca'];

	render(){
		return (
			<div name="other" className="animated fadeIn">
			    <img name="background-image" src="assets/photos/lizard.jpg" />
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
								<div className="gallery gall__1">
										{this.gallery.map((v, i)=>
											<GalleryImg key={i} file={v} />
										)}
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
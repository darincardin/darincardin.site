import {Component} from "preact";


import AsyncImage from '../../components/AsyncImage/AsyncImage.jsx'  

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
			<div className="animated fadeIn"  id="other">
				<div  className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-5 hiking">
						
								<h3>Hiking</h3>
								<hr />	
								<p>
									I'm an avid hiker, and have a <a className="lnk" target="_blank"  href="https://www.youtube.com/user/darincardin" >uTube</a> channel that follows my trips to different wilderness locations across the
									country. While on these trips, I demonstrate survival techniques that may be effective if you were ever lost.
									The techniques range from improvised fire making to edible cacti.
								</p>
						</div>		
					
						<div className="col-xs-12  col-sm-7 photos">

									<h3>Photography</h3>
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

					</div>
				</div>
			</div>
		)
	}
}


export default Other;

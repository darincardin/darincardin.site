


import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   



var Gallery = props =>{
	
	
	var gallery = ['bird', 'birds', 'birds2','cat','clouds','duck','gator','hawk','lily1','lily2','lily3',
	           'lizard','moon','pink1','pink3','rabbit','red1','rocks','sea','stork','street',
	           'suncactus','sunset', 'yucca'];

	

	return (	
		<div>
			{gallery.map((v, i)=>
			<ImgLoad name="gallery-image" height="66px" width="100px" wait="1" src={`/assets/photos/small/${v}.jpg`} href={`/assets/photos/small/${v}.jpg`}   />  							

			
			)}
		</div>	
	)
}


export default Gallery;




import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   



var GalleryImg = props =>{
	
		var path = {
			small:  `/assets/photos/small/${props.file}.jpg`,
			normal: `/assets/photos/normal/${props.file}.jpg`
		}


		return (		
			<ImgLoad name="gallery-image" height="59px" width="90px" wait="1" src={path.small} href={path.normal}   />  	
		)
}


export default GalleryImg;

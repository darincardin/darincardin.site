


import AsyncImg from '../../components/common/asyncimage/AsyncImg.jsx'   



var GalleryImg = props =>{
	
		var path = {
			small:  `/assets/photos/small/${props.file}.jpg`,
			normal: `/assets/photos/normal/${props.file}.jpg`
		}


		return (		
			<AsyncImg className="gallery_item" height="66px" width="100px" src={path.small} href={path.normal}   />  	
		)
}


export default GalleryImg;

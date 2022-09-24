import React from "react";

import AsyncImage from './AsyncImage/AsyncImage.jsx'   


var GalleryImg = props =>{
	
		var path = {
			small:  `/assets/photos/small/${props.file}.jpg`,
			normal: `/assets/photos/normal/${props.file}.jpg`
		}


		return (
			    <a href={path.normal} className="gal_item" target="_blank">
					<AsyncImage file={path.small}/>
            	</a>
		)
}


export default GalleryImg;

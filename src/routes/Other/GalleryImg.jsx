import React from "react";

import AsyncImage from './AsyncImage/AsyncImage.jsx'   


var GalleryImg = props =>{
	
		var path = {
			small:  `/images/photos/small/${props.file}.jpg`,
			normal: `/images/photos/normal/${props.file}.jpg`
		}


		return (
			    <a href={path.normal} className="gal_item" >
					<AsyncImage file={path.small}/>
            	</a>
		)
}


export default GalleryImg;

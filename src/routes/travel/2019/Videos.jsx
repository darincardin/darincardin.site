import React from 'react';


import ImgLoad from '../../../components/common/loadimage/ImgLoad.jsx'   



var Gallery = props =>{
	
	
	var gallery = [
	
			
		{src:'custer2', href:"https://www.youtube.com/watch?v=selxDa3S-j0", txt:"Hiking in Custer State Park", newTab:true, desc:'South Dakota'  },
		{src:'hills4', href:"https://www.youtube.com/watch?v=uNOLkO4CH4Q", txt:"Harneys Peak in the Black Hills", newTab:true, desc:'South Dakota'  },
		{src:'room47', href:"https://www.youtube.com/watch?v=ewiKX3B41Js", txt:"Crazy Woman at the Knights Inn", newTab:true, desc:'Niagra Falls, Canada'  },
		{src:'bowdrill', href:"https://www.youtube.com/watch?v=2BTzFA5EQWE", txt:"Bow Drill Fire Technique", newTab:true, desc:'New Bedford, MA'  },
		{src:'vegas1', href:"https://www.youtube.com/watch?v=LfTbwg15tiI", txt:"Las Vegas Trip 1", newTab:true, desc:'Las Vegas, NV'  },
		{src:'vegas6', href:"https://www.youtube.com/watch?v=M51-GIPVBIY", txt:"Las Vegas Trip 2", newTab:true, desc:'Las Vegas, NV'  },
		{src:'reno1', href:"https://www.youtube.com/watch?v=BbHU7wgTs3M", txt:"Reno Trip", newTab:true, desc:'Reno, NV'  },

		{src:'xxx', href:"https://www.youtube.com/watch?v=EuEpOWZ8eKo", txt:"Drive Through Wyoming", newTab:true, desc:'Wyoming'  },
		{src:'yosemite1', href:"https://www.youtube.com/watch?v=ESU5kG4zyyc&feature=youtu.be", txt:"Yosemite", newTab:true, desc:'Yosemite, CA'  },
		];





	
	var style ={
		height:'66px',
		width: '100px',
		transition: `opacity 1s`
	}
	

	return (	
		<div>
			{gallery.map((v, i)=>
				<span key={i} className="test">
					<ImgLoad  name="gallery-image" style={style} title={v.txt} desc={v.desc}  newTab={v.newTab} src={`/assets/travel/${v.src}.JPG`} href={v.href}   />  
					<span className="gallery-txt">{v.txt}</span>
				</span>
			)}
		</div>	
	)
}


export default Gallery;

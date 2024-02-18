import React from 'react';


import ImgLoad from '../../components/common/loadimage/ImgLoad.jsx'   



var Gallery = props =>{
	
	
	var gallery = [
	
			
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=wU8NNFwyoHg&t=849s", txt:"Utah Desert", newTab:true, desc:'Amateur Survival1'  },
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=wU8NNFwyoHg", txt:" Death Valley", newTab:true, desc:'Amateur Survival1'  },
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=SgoD1yv27ac&t=24s", txt:" South Dakota Mountains", newTab:true, desc:'Amateur Survival1'  },
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=6s5gC1PxqpU ", txt:"Mojave Desert", newTab:true, desc:'Amateur Survival1'  },	
		
		
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=yasT0qlh9_U", txt:" Yellowstone Valley", newTab:true, desc:'Amateur Survival1'  },
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=PQafDF7YkA8 ", txt:"Montana Desert", newTab:true, desc:'Amateur Survival1'  },
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=QXon8GtU6Qo", txt:"Black Pond", newTab:true, desc:'Amateur Survival1'  },	
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=daC-EW2yWCo&t=5s", txt:" Mount Passaconaway", newTab:true, desc:'Amateur Survival1'  },


		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=_vAPOzYlAPI", txt:"Mount Mousilauke", newTab:true, desc:'Amateur Survival1'  },
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=HHMSSojt-C0   ", txt:"Adirondack Mountains", newTab:true, desc:'Amateur Survival1'  },
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=lSrv0lw0pG0", txt:"Freetown State Forest ", newTab:true, desc:'Amateur Survival1'  },	
		{src:'amateur_survival', href:"https://www.youtube.com/watch?v=lun3wZrZqCY", txt:"Freetown State Forest II", newTab:true, desc:'Amateur Survival1'  },

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
					<ImgLoad  name="gallery-image" style={style} title={v.txt} desc={v.desc}  newTab={v.newTab} src={`/assets/${v.src}.jpg`} href={v.href}   />  
					<span className="gallery-txt">{v.txt}</span>
				</span>
			)}
		</div>	
	)
}


export default Gallery;

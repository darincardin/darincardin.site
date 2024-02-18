import React from 'react';


import ImgLoad from '../../../components/common/loadimage/ImgLoad.jsx'   



var Gallery = props =>{
	
	
	var gallery = [
	
			
		{name:'1', txt:"Disney Castle", desc:'Disney World, Orlando, FL'  },
		{name:'2', txt:"Epcot Center", desc:'Disney World, Orlando, FL'  },
		{name:'3', txt:"Me eating a Coconut", desc:'Big Pine Key, FL'  },
		{name:'3a',txt:"Ocean", desc:'Big Pine Key, FL'  },
		{name:'3b',txt:"Ocean", desc:'Big Pine Key, FL'  },
		{name:'4', txt:"My Dad in his Trailer",  desc:'Big Pine Key, FL'  },
		{name:'5', txt:"FSU Football Stadium", desc:'FSU, Tallahassee, FL'  },
		{name:'6', txt:"My Old Apartment", desc:'FSU, Tallahassee, FL'  },
	
			
		{name:'7', txt:"Nasa Space Station", desc:'Nasa, Melbourne, FL'  },	
		{name:'8a', txt:"Nasa Space Station", desc:'Nasa, Melbourne, FL'  },	
		{name:'8b', txt:"Nasa Space Station", desc:'Nasa, Melbourne, FL'  },	
		
		
		{name:'9a', txt:"Everglades", desc:'Everglades, FL'  },	
		{name:'9b', txt:"Everglades", desc:'Everglades, FL'  },
		{name:'10', txt:"Turtle in the Everglades", desc:'Everglades, FL'  },	
		{name:'11', txt:"Bird in the Everglades", desc:'Everglades, FL'  },
		
		
		{name:'12', txt:"Dallas", desc:'Dallas, TX'  },
		{name:'13', txt:"Dallas", desc:'Dallas, TX' },

	
		{name:'20', txt:'Petrified Forest' , desc:"Somewhere" },
		
		{name:'21', txt:'Zoo', desc:"Albequercy, NM" },
		{name:'22', txt:'Zoo' , desc:"Albequercy, NM" },
		{name:'25', txt:'Zoo' , desc:"Albequercy, NM" },
		{name:'26', txt:'Skyline ' , desc:"Albequercy, NM" },
		
	
		{name:'27', txt:'xxxx', desc:"Death Valley, CA" } ,
		{name:'28', txt:'xxxx'  , desc:"Las Vegas, NV" } ,
		{name:'35', txt:'xxx', desc: "Las Vegas, NV" },
		{name:'36', txt:'xxx', desc: "Las Vegas, NV" },
		{name:'37', txt:'xxx', desc:"Las Vegas, NV"  },
		{name:'38', txt:'xxx',  desc:"Las Vegas, NV"  },,
		{name:'39', txt:'xxx' , desc:"Las Vegas, NV"  },
		{name:'40', txt:'xxx' , desc:"Las Vegas, NV"  },
		
		{name:'45', txt:'Big Arch' , desc:"Arches Park"  },
		{name:'46', txt:'Big Arch' , desc:"Arches Park"  },
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
					<ImgLoad  name="gallery-image" style={style} title={v.txt} desc={v.desc}   src={`/assets/travel/2016/${v.name}.JPG`} href={`/assets/travel/2016/${v.name}.JPG`}   />  
					<span className="gallery-txt">{v.txt}</span>
				</span>
			)}
		</div>	
	)
}


export default Gallery;

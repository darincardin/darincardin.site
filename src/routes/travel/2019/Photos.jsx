import React from 'react';


import ImgLoad from '../../../components/common/loadimage/ImgLoad.jsx'   



var Gallery = props =>{
	
	
	var gallery = [
	
			
		{name:'wash1', txt:"Washington Memorial", desc:'Washington DC'  },
		{name:'wash2', txt:"Washington Memorial", desc:'Washington DC'  },
		{name:'wash3', txt:"US Capital", desc:'Washington DC'  },
		{name:'wash4', txt:"US Capital", desc:'Washington DC'  },
		{name:'wash5', txt:"White House", desc:'Washington DC'  },
		{name:'wash6', txt:"WW2 Memorial", desc:'Washington DC'  },
	
			
		{name:'rich1', txt:"Robert E. Lee Memorial", desc:'Richmond, Virgina'  },	
		{name:'rich2', txt:"Robert E. Lee Memorial", desc:'Richmond, Virgina'  },	
		{name:'rich3', txt:"Stonewall Jackson Birthplace", desc:'Richmond, Virgina'  },	
		{name:'rich4', txt:"Stonewall Jackson Birthplace", desc:'Richmond, Virgina'  },	
		
		{name:'uni1', txt:"Virginia Tech Memorial", desc:'Blacksburg'  },
		
		{name:'i1', txt:"Downtown Indianapolis ", desc:'Indianapolis, Iniana'  },	
		{name:'i2', txt:"Downtown Indianapolis ", desc:'Indianapolis, Iniana'  },
		{name:'i3', txt:"Downtown Indianapolis ", desc:'Indianapolis, Iniana'  },
		{name:'i4', txt:"Downtown Indianapolis ", desc:'Indianapolis, Iniana'  },

	
		{name:'sears1', txt:'Sears Tower' , desc:"Chigaco, Illinois" },
		{name:'sears2', txt:'Sears Tower', desc:"Chigaco, Illinois" },
		{name:'sears3', txt:'Sears Tower' , desc:"Chigaco, Illinois" },
		{name:'sears4', txt:'Sears Tower' , desc:"Chigaco, Illinois" },
		{name:'sears5', txt:'Sears Tower ' , desc:"Chigaco, Illinois" },
		
	
		{name:'rushmore1', txt:'Mount Rushmore', desc:"Mount Rushmore, South Dakota" } ,
		{name:'rushmore2', txt:'Mount Rushmore'  , desc:"Mount Rushmore, South Dakota" } ,
		{name:'custer1', txt:'The Begging Burros', desc: "Custer State Park, South Dakota" },
		{name:'custer2', txt:'The Begging Burros', desc: "Custer State Park, South Dakota" },
		{name:'hills1', txt:'Harneys Peak', desc:"Black Hills, South Dakota"  },
		{name:'hills2', txt:'Harneys Peak',  esc:"Black Hills, South Dakota"  },,
		{name:'hills3', txt:'Harneys Peak' , desc:"Black Hills, South Dakota"  },
		{name:'hills4', txt:'Harneys Peak' , desc:"Black Hills, South Dakota"  },
		
		

		
		
		
		{name:'museum1', txt:'Worland Museum', desc:" Worland, Wyoming"  },
		{name:'museum2', txt:'Worland Museum', desc:" Worland, Wyoming"  },
		{name:'museum3', txt:'Worland Museum', desc:" Worland, Wyoming"  },
		
		
		
		


		{name:'reno1', txt:"Downtown Reno", desc:'Reno, Nevada'  },		
		{name:'reno2', txt:"Reno Arch", desc:'Reno, Nevada'  },		
		{name:'reno3', txt:"Reno Arch", desc:'Reno, Nevada'  },		

		
		{name:'san1', txt:'Alamo Park' , desc:"San Fransisco, CA"},
		{name:'san2', txt:'Alamo Park'   , desc:"San Fransisco, CA"},
		{name:'san3', txt:'Full House Scene'  , desc:"San Fransisco, CA"},		
		
		

		{name:'yo3', txt:'Yosemite Park'  , desc:"California" },		
		{name:'yo4', txt:'Yosemite Park'  , desc:"California" },	
		{name:'yo5', txt:'Yosemite Park'  , desc:"California" },			
		
		
		

	
	
		{name:'vegas1', txt:'Vegas Welcome Sign', desc:"Las Vegas, Nevada"  },		
		{name:'vegas2', txt:'Treasure Island', desc:"Las Vegas, Nevada"  },	
		{name:'vegas3', txt:'Bellagio', desc:"Las Vegas, Nevada"  },	
		{name:'vegas4', txt:'Planet Hollywood', desc:"Las Vegas, Nevada"  },	
		{name:'vegas5', txt:'Bellagio', desc:"Las Vegas, Nevada"  },	
		{name:'vegas6', txt:'Paris Casino', desc:"Las Vegas, Nevada"  },	
		
		{name:'hoover1', txt:'Hoover Dam', desc:"Black Canyon, Colorado"  },
		{name:'hoover2', txt:'Hoover Dam', desc:"Black Canyon, Colorado"  },
		
		
		{name:'canyon0', txt:'Grand Canyon', desc:"Arizona"  },		
		{name:'canyon1', txt:'Grand Canyon', desc:"Arizona"  },		
		{name:'canyon2', txt:'Grand Canyon', desc:"Arizona"  },		
		{name:'canyon3', txt:'Grand Canyon', desc:"Arizona"  },		
		{name:'canyon4', txt:'Grand Canyon', desc:"Arizona"  },		
		
		{name:'4corners1', txt:'Four Corners', desc:"Colorado, Arizona, New Mexico, Utah"  },
	
	    {name:'louis1', txt:'Saint Louis Arch', desc:"Saint Louis, Missouri"  },	
	    {name:'louis2', txt:'Saint Louis Arch', desc:"Saint Louis, Missouri"  },
		{name:'louis3', txt:'Downtown Saint Louis', desc:"Saint Louis, Missouri"  },
		
		

			
	
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
					<ImgLoad  name="gallery-image" style={style} title={v.txt} desc={v.desc}   src={`/assets/travel/${v.name}.JPG`} href={`/assets/travel/${v.name}.JPG`}   />  
					<span className="gallery-txt">{v.txt}</span>
				</span>
			)}
		</div>	
	)
}


export default Gallery;

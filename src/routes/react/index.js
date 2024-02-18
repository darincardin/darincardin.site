import React from 'react';

import './styles.scss';


import StrategyList from './strategy'



var Coding = props => {

	return (
		
			<div  name="coding" className="animated fadeIn" >
				<div  className="container-fluid g-0">
					<div className="row">
						<div className="col-xs-12 " style={{textAlign:'center'}}>

								{StrategyList.map(w=>(	
						
									<div key={w.title} name="card-multipanel">					
											<div>
												<h3>{w.title}</h3>
												<hr className="short" />
												
												<div dangerouslySetInnerHTML={{ __html: w.text }} />
												<a name="github" target="_blank" href={w.url} >GitHub</a>												
											</div>
												
											<div>
												<w.widget />
											</div>
									</div>											
								))}

						</div>
					</div>

				</div>
			</div>
		
	);
}


export default Coding;

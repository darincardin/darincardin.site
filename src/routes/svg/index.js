import { Redirect, Switch, Route} from "react-router-dom";

import React, { Suspense } from 'react';

import Loading from '../../loading'

import Nav from './navigation.js'



var SVG = props => {

	return (
		
			<div  className="animated fadeIn svg" >
				<div  className="container">
					<div className="row">
						<div className="col-xs-12 ">
							<Nav />
						</div>
					</div>
					
					<div className="row">
						<div className="col-xs-12 ">					
							<Suspense fallback={Loading}>
								<Switch>
									<Route path="/svg/rocket" >
										<img  src="../assets/svg/rocket.svg" />
									</Route>
										
									<Route path="/svg/cursive" >
										<img  src="../assets/svg/partouche.svg" />
									</Route>
										
									<Route path="/svg/tropic" >	
										<img  src="../assets/svg/tropic.svg" />
									</Route>
										
									<Redirect from="/svg" to="/svg/rocket" />	
								</Switch>
							</Suspense>	
						</div>
					</div>	
						
						
				</div>
			</div>
		
	);
}


export default SVG;

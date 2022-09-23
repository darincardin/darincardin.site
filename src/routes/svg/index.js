import {BrowserRouter as Router, Redirect, Switch, Route, Link, withRouter} from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { Suspense } from 'react';

//import ('./styles.scss');
//import style from './styles.scss';

import Loading from '../../loading'

import Nav from './navigation.js'

import Rocket from './Rocket.js'
import Cursive from './Cursive.js'
import Tropic from './Tropic.js'

var Home = props => {




	return (
		
			<div  className="animated fadeIn svg" >
				<div  className="container">
					<div className="row">
						<div className="col-xs-12 ">

								<Nav />
								<div >
								
					
									<Suspense fallback={Loading}>
									<Switch>
										<Route path="/svg/rocket"  component={Rocket} />
										<Route path="/svg/cursive"  component={Cursive} />
										<Route path="/svg/tropic" component={Tropic} />	
										<Redirect from="/svg" to="/svg/rocket" />	
									</Switch>
									</Suspense>	
								</div>
						</div>	
						
					</div>	
				</div>
			</div>
		
	);
}


export default Home;

import React from "react";
import {BrowserRouter, NavLink, Switch, Redirect, DefaultRoute, Route, Link, withRouter} from "react-router-dom";
import './styles.scss';

import Rocket from './Rocket.jsx'
import Cursive from './Cursive.jsx'
import Tropic from './Tropic.jsx'

var Home = props => {



	var Navigation = props =>{
		
		return (
		
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav">					
					<li><NavLink to="/svg/rocket">Rocket</NavLink></li>
					<li><NavLink to="/svg/cursive">Cursive</NavLink></li>		
					<li><NavLink to="/svg/tropic">Tropic</NavLink></li>		
										
				</ul>	
			</nav>			
		
		)
		
	}


	return (
		<>
			<div  className="animated fadeIn svg" >
				<div  className="container">
					<div className="row">
						<div className="col-xs-12 ">

								<Navigation />
								<div class="svg">
									<Switch>
										<Route path="/svg/rocket"  component={Rocket} />
										<Route path="/svg/cursive"  component={Cursive} />
										<Route path="/svg/tropic" component={Tropic} />	
										<Redirect from="/svg" to="/svg/rocket" />	
									</Switch>	
								</div>
						</div>	
						
					</div>	
				</div>
			</div>
		</>
	);
}


export default Home;

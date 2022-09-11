import {BrowserRouter as Router, Redirect, Switch, Route, Link, withRouter} from "react-router-dom";

import Header from './layout/header';
import Footer from './layout/footer';

import Home from '../routes/home';
import Resume from '../routes/resume';
import SVG from '../routes/SVG';
import React from '../routes/react';
import CaseStudy from '../routes/casestudy';
import Other from '../routes/other';


const App = () => {

	
	
	return	(
		<Router>
			<div id="app">
			
					<Header />		
					<main>	
					
						
								<Switch>
									<Route path="/home"   component={Home} />
									
									<Route path="/resume" component={Resume} />
									<Route path="/other"  component={Other} />
									
									<Route path="/svg"  component={SVG} />
									<Route path="/casestudy"  component={CaseStudy} />
									<Route path="/react"  component={React} />
									
									
									
									<Redirect from="/" to="/home" />	
								</Switch>
						
				
					
					</main>								
					<Footer />	
			</div>
		</Router>	
)}


export default App;

/*



*/



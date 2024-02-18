

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import React, { Suspense } from 'react';





import Layout from './layout'



const Home = 		React.lazy(() => import('../routes/home/'));
const Resume = 		React.lazy(() => import('../routes/resume'));

const CaseStudy = 	React.lazy(() => import('../routes/casestudy'));
const SVG =  		React.lazy(() => import('../routes/svg'));
const Code = 		React.lazy(() => import('../routes/react'));


const Survival = 	React.lazy(() => import('../routes/survival'));
const Videos = 		React.lazy(() => import('../routes/videos'));
const Photography = React.lazy(() => import('../routes/photography'));

const Travel2012 = 	React.lazy(() => import('../routes/travel/2012'));
const Travel2016 = 	React.lazy(() => import('../routes/travel/2016'));

class App extends React.Component {

	state = {hasError:false}

    static getDerivedStateFromError(error) {
		return({hasError:true})	
    }

	render() {
		return	(
			<>
		
			
			<div className="background"></div> 
			<Router>
				<div id="app">
					<Layout.Header />	
					<main>	
						<div>{this.state.hasError}</div>
						
						<div>
							{!this.state.hasError && 
								<Suspense fallback={Layout.Fallback}>
									<Switch>
										<Route path="/home"   component={Home} />	
										<Route path="/resume" component={Resume} />

										<Route path="/casestudy"  component={CaseStudy} />
										<Route path="/code"  component={Code} />
										<Route path="/svg"  component={SVG} />
										
	
										<Route path="/travel2012"  		component={Travel2012} />
										<Route path="/travel2016"  		component={Travel2016} />										
										<Route path="/travel2019"  		component={Travel2012} />
										
										<Route path="/survival" 	component={Survival} />
										<Route path="/videos" 		component={Videos} />
										<Route path="/photography"  component={Photography} />
										
										<Redirect from="/" to="/home" />	
									</Switch>
								</Suspense>
							}
						</div>
					</main>					
					<Layout.Footer />	
				</div>
			</Router>	
			
		
	</>)}	 

}

export default App;



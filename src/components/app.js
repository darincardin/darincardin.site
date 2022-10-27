import {Component} from 'preact'

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import React, { Suspense } from 'react';





import Layout from './layout'


const Home = React.lazy(() => import('../routes/home/'));
const Resume = React.lazy(() => import('../routes/resume'));
const CaseStudy = React.lazy(() => import('../routes/casestudy'));
const Code = React.lazy(() => import('../routes/react'));
const SVG = React.lazy(() => import('../routes/svg'));
const Other = React.lazy(() => import('../routes/other/'));





class App extends Component {

	state = {hasError:false}

    static getDerivedStateFromError(error) {
		return({hasError:true})	
    }

	render() {
		return	(
			<>
		
			{ 
			<Router>
				<div id="app">
					<Layout.Header />		
					<main>	
						<div>{this.state.hasError && <Layout.ErrorPage />}</div>
						
						<div>
							{!this.state.hasError && 
								<Suspense fallback={Layout.Fallback}>
									<Switch>
										<Route path="/home"   component={Home} />	
										<Route path="/resume" component={Resume} />
										<Route path="/other"  component={Other} />
										<Route path="/react"  component={Code} />
										<Route path="/casestudy"  component={CaseStudy} />
										<Route path="/svg"  component={SVG} />	
										<Redirect from="/" to="/home" />	
									</Switch>
								</Suspense>
							}
						</div>
					</main>					
					<Layout.Footer />	
				</div>
			</Router>	
			}
		
	</>)}	 

}

export default App;



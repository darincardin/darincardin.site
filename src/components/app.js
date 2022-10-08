
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import React, { Suspense } from 'react';


import Layout from './layout'


const Home = React.lazy(() => import('../routes/home/'));
const Resume = React.lazy(() => import('../routes/resume'));
const CaseStudy = React.lazy(() => import('../routes/casestudy'));
const Code = React.lazy(() => import('../routes/react'));
const SVG = React.lazy(() => import('../routes/svg'));
const Other = React.lazy(() => import('../routes/other/'));





const App = () => {

	
	
	
	return	(
		<>
				
		{ typeof window !== "undefined" && 
		<Router>
			<div id="app">
				<Layout.Header />		
				<main>	
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

				</main>					
				<Layout.Footer />	
			</div>
		</Router>	
		}
</>
)
 

}

export default App;



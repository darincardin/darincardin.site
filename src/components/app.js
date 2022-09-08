import { h } from 'preact';
import { Router, Route} from 'preact-router';

//import { Routes, Router, Route } from 'react-router-dom';

import Header from './layout/header';
import Footer from './layout/footer';


import Home from '../routes/home';
import CaseStudy from '../routes/code/casestudy';
import Resume from '../routes/resume';


import Other from '../routes/other';


    
const App = () => {
	
	return	(
	<div id="app">
	
			<Header />		
			<main>	
			
				<Router>
					<Route path="/home"   component={Home} />
					<Route path="/casestudy" component={CaseStudy} />
					<Route path="/resume" component={Resume} />
		
				
					<Route path="/other"  component={Other} />
									
									
					
				</Router>		
	   
			
			</main>								
			<Footer />	
	</div>
)}


export default App;

/*



*/



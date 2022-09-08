import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './layout/header';
import Footer from './layout/footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Resume from '../routes/resume';
import Other from '../routes/other';

const App = () => (
	<div id="app">
			<Header />		
			<main>	
				<Router>
					<Home path="/" />
					<Home path="/home" />
					<Resume path="/resume"  />
					<Other path="/other" />
				</Router>
			</main>								
			<Footer />	
	

	</div>
)

export default App;

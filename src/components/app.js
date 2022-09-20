//import {BrowserRouter as Router, Redirect, Switch, Route, Link, withRouter} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


/*
import InputFactory from './Inputs/InputFactory.jsx'
import Validation from './Tools/Validation.js';
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

*/


import Header from './layout/header';
import Footer from './layout/footer';

import Home from '../routes/home';
import Resume from '../routes/resume';
import Other from '../routes/other';
import Code from '../routes/react';
import CaseStudy from '../routes/casestudy';
import SVG from '../routes/svg';

const App = () => {



	
	
	return	(
		<>
		
		

		
		{ typeof window !== "undefined" && 
		<Router>
			<div id="app">
			
					<Header />		
					<main>	
						<Switch>
							<Route path="/home"   component={Home} />
									
							<Route path="/resume" component={Resume} />
							<Route path="/other"  component={Other} />
							<Route path="/react"  component={Code} />
							<Route path="/casestudy"  component={CaseStudy} />
							<Route path="/svg"  component={SVG} />
			
						
									
									
									
							<Redirect from="/" to="/home" />	
						</Switch>
					</main>								
					<Footer />	
			</div>
		</Router>	
		}
</>
)
 

}

export default App;




					/*
					
						
			<>
			
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see  
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >  
            Simple tooltip
          </div>
        )}
      </Overlay>
      </>
					
					
					*/

									




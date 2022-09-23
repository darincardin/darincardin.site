import React, { Suspense } from 'react';
import Nav from './navigation.js'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import StrategyList from './strategy'

//import style from './styles.scss';

import Loading from '../../loading'



var Code = () => {

		return (
			<div id="code">
					
				
					<div  className="container">
						<div className="row">
							
								<div className=" col-xs-12" >
									<Nav/>
								
										
									<Suspense fallback={Loading}>
											<Switch>
												
												{StrategyList.map(w=>(	
													<Route path={w.path}  >
														<div className="row">
															<div className='col-xs-12 col-sm-6'>
																<div dangerouslySetInnerHTML={{ __html: w.text }} />
								
																<SyntaxHighlighter language="javascript" style={docco}>{w.code}</SyntaxHighlighter>
																
																<a target="_blank" href={w.url} >GitHub</a>		
															</div>	
																
															<div className='col-xs-12 col-sm-6' >
																<w.widget />
															</div>					
														</div>
													</Route>
												))}
												
												<Redirect from="/react" to="/react/step" />	
											</Switch>	
									</Suspense>											
									
								</div>
										
						</div>
					</div>	
					
			</div>			
		);
}


export default Code;



import React, { Suspense } from 'react';
import Nav from './navigation.js'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


import SyntaxLoader from '../../components/common/syntaxloader'


import StrategyList from './strategy'

import Layout from '../../components/layout'

var Code = () => {

		return (
			<div id="code">
					
				
					<div  className="container">
						<div className="row">
							
								<div className=" col-xs-12" >
									<Nav/>
								
										
									<Suspense fallback={Layout.Fallback}>
											<Switch>
												
												{StrategyList.map(w=>(	
													<Route path={w.path}  >
														<div className="row">
															<div className='col-xs-12 col-sm-6'>
																<div dangerouslySetInnerHTML={{ __html: w.text }} />
																<SyntaxLoader code={w.code}/>								

																<a target="_blank" href={w.url} >GitHub</a>		
															</div>	
																
															<div className='col-xs-12 col-sm-6' >
																<w.widget />
															</div>					
														</div>
													</Route>
												))}
												
												<Redirect from="/react" to="/react/form" />	
											</Switch>	
									</Suspense>											
									
								</div>
										
						</div>
					</div>	
					
			</div>			
		);
}


export default Code;



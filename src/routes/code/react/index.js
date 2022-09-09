
import {BrowserRouter, NavLink, Switch, Redirect, DefaultRoute, Route, Link, withRouter} from "react-router-dom";
import {GetForm, GetList, GetTokenizer, GetOrderForm, GetStep} from './Demo.js'
import Navigation from './Navigation.js'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import stepbar from "./syntax/stepbar";
import form from "./syntax/form"
import token from "./syntax/token";

import './styles.scss';


var Code = props => {

	
	var View1 = ()=>(
			
		<Switch>
			{[form, token, stepbar].map(w=>(	
					<Route path={w.path} >
						<div>		
				         	<div dangerouslySetInnerHTML={{ __html: w.text }} />
								
							<SyntaxHighlighter language="javascript" style={docco}>
								{w.code}
							</SyntaxHighlighter>
						</div>
						
						<a target="_blank" href={w.url} >GitHub</a>
					</Route>	  
			))}

			<Redirect from="/react" to="/react/form" />	
		</Switch>	
	)
	
	var View2 = ()=>(
		<Switch>

			<Route path="/react/step"  component={GetStep} />
			<Route path="/react/token"  component={GetTokenizer} />
			<Route path="/react/form"  component={GetForm} />
			<Redirect from="/react" to="/react/form" />	
		</Switch>	
	)
	


		return (
			<>
				<div className="animated fadeIn code-bg"></div>
				<div className="animated fadeIn" id="code">
					
					<BrowserRouter>	
							<div  className="container">

								<div className="row">
										<div className="samples" >
											<div className=" col-xs-12 col-sm-6" >
												<Navigation />
												<div  className="description" ><View1 /></div>
											</div>
											<div className="example col-xs-12 col-sm-6">
												<View2/>
											</div>
										</div>
										
								</div>
							</div>	
					</BrowserRouter>	
				
				</div>
			</>
		);
	
}


export default Code;



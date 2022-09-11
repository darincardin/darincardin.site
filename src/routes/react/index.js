
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Nav from './navigation.js'

import StrategyList from './strategy'

import style from './styles.scss';


var Code = () => {

	
	var Description = ()=>(
			
		<Switch>
			{StrategyList.map(w=>(	
				<Route path={w.path} >
	
				    <div dangerouslySetInnerHTML={{ __html: w.text }} />
								
					<SyntaxHighlighter language="javascript" style={docco}>
						{w.code}
					</SyntaxHighlighter>
					
					<a target="_blank" href={w.url} >GitHub</a>
				</Route>	  
			))}

			<Redirect from="/react" to="/react/step" />	
		</Switch>	
	)
	
	var Example = ()=>(
		<Switch>
			{StrategyList.map(w=>(	
				<Route path={w.path}  component={w.widget} />
			))}
			
			<Redirect from="/react" to="/react/step" />	
		</Switch>	
	)
	


		return (
			<div className="animated fadeIn" id="code">
					
				<BrowserRouter>	
					<div  className="container">
						<div className="row">
							<div className="samples" >
								<div className=" col-xs-12 col-sm-6" >
									<Nav />
									<div className="description" ><Description /></div>
								</div>
								<div className={'col-xs-12 col-sm-6 ' + style.example}>
									<Example />
								</div>
							</div>			
						</div>
					</div>	
				</BrowserRouter>	
			</div>			
		);
}


export default Code;



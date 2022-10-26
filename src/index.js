import {Component} from 'preact'



import 'bootstrap/dist/css/bootstrap.min.css';
import 'counter/dist/css/counter.min.css'

var $ = window.jQuery = window.$ = require('jquery');

 
require('counter');    

import App from './components/app';

import Layout from './components/layout';

class Main extends Component {
	
	state = {loading:true}
	
	constructor(){
		super();
		
		if( typeof window !== "undefined" ){
			Promise.all([
				import ('./style'),
				import ('./style/header.scss'),
				import ('./style/navigation.css'),
				import ('./style/loading.css')		,
				import ('bootstrap/dist/css/bootstrap.min.css')	,	
				import ( './style/async-image.scss')
			]).then(()=>{			
		
				$('.loader1').remove();

				this.setState({loading:false})
				
				Promise.all([
					import ( './style/validation.scss'),
					import ( './style/tooltip.css'),
					import ( './style/tokenizer.scss'),
					import ( './style/stepbar.scss')				
				]).then(()=>{})	
				
			})
		}
		
		//this.setState({loading:false})
	}

	renderxx = ()=> {
		return (		
			<>
				<div></div>
			</>
		)
	}	
	render = ()=> {
		return (		
			<>
				{ this.state.loading ? <Layout.Loading />  : <App /> }	
			</>
		)
	}
}



export default Main;


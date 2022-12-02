import {Component} from 'preact'


if(typeof window !== "undefined") window.jQuery = window.$ = require('jquery');	

var $ = require('jquery'); 
  

import App from './components/app';

import Layout from './components/layout';

class Main extends Component {
	
	state = {loading:true}
	
	constructor(){
		super();
		
		if( typeof window !== "undefined" ){
			Promise.all([
				import ('./style/index.scss'),
				import ('./style/header.scss'),
				import ('./style/navigation.css'),
				import ('./style/loading.css'),
				import ('bootstrap/dist/css/bootstrap.css')	
			]).then(()=>{			
		
				$('.loader1').remove();

				this.setState({loading:false})
				
				Promise.all([
					import ( './style/validation.scss'),
					import ( './style/tooltip.css')		
				]).then(()=>{})	
				
			})
		}
		
		//this.setState({loading:false})
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


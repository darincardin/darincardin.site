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
				import ('./style/loading.css'),
				import ('bootstrap/dist/css/bootstrap.css')	
			]).then(()=>{			
			
			
			
				this.setState({loading:false},	()=>{ 
					$('.init-loader').addClass('hide');
					setTimeout(()=>{  $('.init-loader').remove()  }, 750)
				})
				
				Promise.all([
					import ( './style/validation.scss'),
					import ( './style/tooltip.css')	
					
				]).then(()=>{})	
				
			})
		}
		
	}


	render = ()=> {
		
		
		return (		
			<>	
				{!this.state.loading && <App /> }
				
			
			
			</>
		) // <Layout.Loading loading={this.state.loading}/>
	}// className={this.state.loading?"":"hide"}
}



export default Main;


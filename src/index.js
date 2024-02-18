import React from 'react';


import ReactDOM from 'react-dom';

if(typeof window !== "undefined") window.jQuery = window.$ = require('jquery');	

var $ = require('jquery'); 


import App from './components/app';


class Main extends React.Component {
	
	state = {loading:true}
	
	constructor(){
		super();

		if( typeof window !== "undefined" ){
			Promise.all([
				import ('./style/index.scss'),
				import ('./style/loading.css'),
				import ('bootstrap/dist/css/bootstrap.css'),
				import ('bootstrap/dist/js/bootstrap.js')		
			]).then(()=>{			
				
				this.setState({loading:false},	()=>{ 
					$('.init-loader').addClass('hide');
					setTimeout(()=>{  $('.init-loader').remove()  }, 750)
				})
			})
		}	
	}


	render = ()=> {
		
		return (		
			<>	
				{!this.state.loading && <App /> }
			</>
		) 
	}
}

ReactDOM.render(<Main></Main>, document.getElementById('app'));



export default Main;


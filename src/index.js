import {Component} from 'preact'


import './style';
import './style/header.scss';
import './style/navigation.css';

import './style/validation.scss';
import './style/tooltip.css';
import './style/tokenizer.scss';
import './style/stepbar.scss';
import './style/loading.css';

import './style/async-image.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';

import Layout from './components/layout';

class Main extends Component {
	
	state = {loading:true}
	
	constructor(){
		super();
		
		/*
		Promise.all([
			

			import ('./style'),
			import ('./style/header.scss'),
			import ('./style/navigation.css')		
		
		]).then(()=>{
			this.setState({loading:false})
		})
		
		*/
		this.setState({loading:false})
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


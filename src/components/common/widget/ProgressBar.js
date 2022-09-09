import React from 'react';

var HTML = ()=>{
	
	return <div>XXXXXXXXXXXXXXX</div>
	
	/*
	return ReactDOM.createPortal(
						(<div  > 
							<div>
								<div {...this.attribs} >Processing...</div>
							</div>
						</div> , document.getElementById('progress-bar')))
	*/
}


var ProgressBar = (WrappedComponent) => {
	class Overlay extends React.Component {
		  
		state = {show:false}  
		  
		attribs = {
			'className': 'progress-bar progress-bar-info progress-bar-striped active',
			'role': 'progressbar', 
			'aria-valuenow': '100',
			'aria-valuemin': '0',
			'aria-valuemax': '100' 
		}
		  
		functions = {
			show: ()=>{ 
				this.setState({show:true }) 
			},
			hide: ()=>{ 
				this.setState({show:false}) 
			}
		}			
		  
		render() {
			return(
				<> 
					
					<WrappedComponent {...this.props} progress={this.functions} /> 
				</>
		)}	
	}
    
	return Overlay;
};

export default ProgressBar;

//<HTML  className={`order-progress ${this.state.show?"show":"hide"}`} />
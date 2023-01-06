import {Component} from 'preact'


class Loading extends Component {
	
	render() {

		return 	(		
			<div className="loader1"> 
				<img  src="/assets/preloader.gif" />
			</div>
		)
	}
}




var Fallback = 	(<div className="loader2">
					<img  src="/assets/preloader.gif" />
				</div>	)
				
				
				

export  {Loading, Fallback};



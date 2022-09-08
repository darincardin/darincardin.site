import {Component} from "preact";

import './style.scss'

class AsyncImage extends Component{


		constructor(props){
			super(props)
			//this.elem = React.createRef();
		}
	
		xxcomponentDidMount(){
			var img = new Image();
			img.src = this.props.file;
			
			var elem = this.elem.current;
			
			img.onload = function(){
				$(elem).find('.picture').addClass('show')[0].src = this.src;
				$(elem).find('.spinner').remove();
			}
		}


		
		render() {
			return (
			    <div ref={this.elem} className="async-image">
					<div  className="spinner">
						<div />
					</div>
					<img className="picture" />
            	</div>
			)
		}
}


export default AsyncImage;

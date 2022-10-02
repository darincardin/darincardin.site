import {Component} from "preact";
import { createRef } from 'preact'
import style from './style.scss'

import $ from 'jquery';

class AsyncImage extends Component{


		constructor(props){
			super(props)
			this.elem = createRef();
		}
	  
		componentDidMount(){
			var img = new Image();
			img.src = this.props.file;
			
			var elem = this.elem.current;
			
			img.onload = function(){
				$(elem).find('.picture')[0].src = this.src;
				$(elem).find('.spinner').addClass('hide')
			//	$(elem).find('div:first-child').remove();
			}
		}


		
		render() {
			return (
			    <div ref={this.elem} className={style.asyncImage} >
			    
			        <img className='picture' />
					<div  className={style.spinner + ' spinner'} >  
						<div />
					</div>
					
            	</div>
			)
		}
}


export default AsyncImage;

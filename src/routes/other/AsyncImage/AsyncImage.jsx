import {Component, createRef} from "preact";

import style from './style.scss'

import $ from 'jquery';

class AsyncImage extends Component{

		static counter = 0;

		constructor(props){
			super(props)
			this.elem = createRef();
		}
	  
		componentDidMount(){
			
				var x = setInterval(()=>{
					
					if(AsyncImage.counter<4){ 
						AsyncImage.counter++;
						clearInterval(x)
						this.load();
					}
					
				}, 200)							
		}

		load = ()=>{
			
			var img = new Image();
			img.src = this.props.file;
			
			var elem = this.elem.current;
			
			img.onload = function(){
				$(elem).find('.picture')[0].src = this.src;
				$(elem).find('.spinner').addClass('hide');
				
				AsyncImage.counter--;
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

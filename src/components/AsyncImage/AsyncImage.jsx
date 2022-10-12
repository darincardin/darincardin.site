import {Component, createRef} from "preact";

import $ from 'jquery';

class AsyncImage extends Component{
		static max = 6
		
		static counter = 0;

		constructor(props){
			super(props)
			this.elem = createRef();
		}
	  
		componentDidMount(){

			this.elem.current.style.height = this.props.height;
			this.elem.current.style.width  = this.props.width;
		
		
			if(AsyncImage.counter<AsyncImage.max){ 
				AsyncImage.counter++;
				this.load();
			}		
			else {
			
				var x = setInterval(()=>{
					if(AsyncImage.counter<AsyncImage.max){ 
						AsyncImage.counter++;
						clearInterval(x)
						this.load();
					}
				}, 200)				
			
			}		
		}
	
		loaded =()=>{
			var spinner = $(this.elem.current).find('.spinner');
			
			spinner.addClass('hide');
			
			setTimeout(()=>{
				spinner.remove();
			},500)
		}


		load = ()=>{
			var _this = this;

			var img = new Image();
			img.src = this.props.src;
			
			img.onload = function(){
								
				$(_this.elem.current).find('img')[0].src = this.src;
				
				if(!_this.props.height) _this.elem.current.style.height = this.height + "px";
				if(!_this.props.width)  _this.elem.current.style.width  = this.width + "px";

				_this.loaded();
				AsyncImage.counter--;
			}		
		}

		
		render() {
			return (
			    <div ref={this.elem} className={this.props.className + ' async-image'}  >	        
					<div  className='spinner'><div /></div>	
					{  this.props.href && <a href={this.props.href} target="_blank"><img /></a> }
					{ !this.props.href && <img /> }				 
            	</div>
			)
		}
}

AsyncImage.defaultProps = {
	className: '',
	height:'auto',
	width:'auto'
}


export default AsyncImage;





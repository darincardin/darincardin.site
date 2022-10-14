import {Component, createRef} from "preact";

import $ from 'jquery';



class Singleton {
	
	static queue = [];			
	static workers = 0;
	
	static async add(obj){
			debugger
		Singleton.queue.push(obj);

		if(Singleton.workers < 4){ 
			Singleton.workers++;
			setTimeout(()=>{ Singleton.initWorker()},1)
		}
	}
	
	static async initWorker() {
		
		while(Singleton.queue.length>0) await Singleton.process();
			
		Singleton.workers--;		 
	}

	
	
	static process(){
		
		return  new Promise((resolve, reject) => {
			
			var item = Singleton.queue.shift();

			var img = new Image();
			img.src = item.src;
				
			img.onload = function(){		
				$(item.current).find('img')[0].src = this.src;
				$(item.current).find('.spinner').remove();	
				
				resolve();
			}					
		});
	}
}

class AsyncImage extends Component{

		constructor(props){
			super(props)
			this.elem = createRef();
		}
	  
	  	componentDidMount(){
		
			var src  = this.props.src;
			
			this.elem.current.style.height = this.props.height;
			this.elem.current.style.width  = this.props.width;			
		
			var current = this.elem.current;
					
			Singleton.add({current, src})
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





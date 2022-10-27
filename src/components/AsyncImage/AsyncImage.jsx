import {Component, createRef} from "preact";

import $ from 'jquery';



class AsyncImage extends Component{

	static queue = [];			
	static workers = 0;

	state={hasError: false} 

    static getDerivedStateFromError(error) {
		return({hasError:true})	
    }


	constructor(props){
			super(props)
			this.elem = createRef();
	}
	  
	componentDidMount(){
		
			var src  = this.props.src;
			
			this.elem.current.style.height = this.props.height;
			this.elem.current.style.width  = this.props.width;			
		
			var current = this.elem.current;
					
			AsyncImage.add({current, src})
	}

	
	static async add(obj){
		
		AsyncImage.queue.push(obj);

		if(AsyncImage.workers < 4){ 
			AsyncImage.workers++;
			setTimeout(AsyncImage.initWorker)
		}
	}
	
	static async initWorker() {	
		while(AsyncImage.queue.length>0) await AsyncImage.process();		
		AsyncImage.workers--;		 
	}

	
	
	static process(){
		
		return  new Promise((resolve, reject) => {
			
			var item = AsyncImage.queue.shift();

			var img = new Image();
			img.src = item.src;
				
			img.onload = function(){	
	
				$(item.current).find('img')[0].src = this.src;
				$(item.current).find('.status').empty();	
		
				resolve();
			}	
			
			img.onerror = function(){
				$(item.current).find('.status').html('<div>Error</div>');
				resolve();
			}				
		});
	}

	render() {
			return (
			    <div ref={this.elem} className={this.props.className + ' async-image'}  >	
					<div className="status" > <div  className='spinner'><div /></div>	</div>
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





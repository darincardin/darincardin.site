import React, { Suspense } from 'react';


const Loader = React.lazy(() => import('./loader.js'));

// import Loader from './loader.js';

export default (props)=>{
	
	
	
	return <div>

		<Loader code={props.code} />
											

	</div>
}
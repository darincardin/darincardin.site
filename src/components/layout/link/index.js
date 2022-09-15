
import { NavLink } from "react-router-dom";

//import './style.css';


var Link =  props => {	

		return (
			<NavLink to="/other">{props.children}</NavLink>
		);
}

export default Link;
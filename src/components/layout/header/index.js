
import  Navigation  from "./navigation.js";

import styles from './styles.scss';
  

var Header =  props => {
	

		return (
			<header>
				<img  src="../assets/svg/name.svg" />
	
				<Navigation />
				
			</header>
	  );

}

export default Header;

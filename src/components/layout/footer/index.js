
import './style.scss';

const Footer = () => (
			<footer>
				<div className="copy">
					<span className="brand">
						Developed in 2021
					</span> 	
					
				</div>
			</footer>
)

export default Footer;
/*
class Footer extends React.Component{
	
	
	
	
		Social = ()=> 	(
			<address>	
				<div > 
					<a target="_blank" href="https://www.linkedin.com/in/darin-cardin-23545079"><i className="fa fa-linkedin xxxfa-2x"></i></a>
					<a target="_blank" href="https://github.com/darincardin"><i className="fa fa-github xxxfa-2x"></i></a>
					<a target="_blank" href="https://stackoverflow.com/users/6805788/darin-cardin"> <i className="fa fa-stack-overflow xxxfa-2x"></i></a>		
				</div>
				<img width="100" src="./images/icons_b.png" alt="links" useMap="#links" />
			</address>
		)
	
    render() {

		var Social = this.Social;
	
		return (
			<footer>
				<div className="copy">
					<span className="brand">
						Developed in 2021
					</span> 	
					<Social />
				</div>
			</footer>
	    );
	}
}

export default Footer;
*/
import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-credits">
					<div className="footer-credits-text">
						<br/>Site créé avec un template basé sur le projet <a href="https://github.com/truethari/reactfolio" target="_blank">reactfolio</a> par Tharindu.dev.
						<br/><a href="https://www.flaticon.com/free-icons/snapchat-logo" title="snapchat logo icons">Snapchat logo icons created by Hight Quality Icons - Flaticon</a>
						<br/><a href="https://www.flaticon.com/free-icons/gaming" title="gaming icons">Gaming icons created by mynamepong - Flaticon</a>
						<br/><a href="https://www.flaticon.com/free-icons/sprout" title="sprout icons">Sprout icons created by Freepik - Flaticon</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
						Thank you for visiting my portfolio!
						</div>

						<div className="subtitle contact-subtitle">
							I hope you enjoyed exploring my projects and learning more about my work. 
							If you have any questions, ideas, or opportunities you'd like to discuss, feel free to reach out. 
							I'm always excited to connect and collaborate!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;

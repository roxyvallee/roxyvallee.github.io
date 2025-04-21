import React from "react";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, link, background } = props;

	return (
		<React.Fragment>
			<div className="project"
			style={{
				background: `url(${background})`,
				backgroundSize: 'cover',  // Ensures the image fits within the container without cropping
				backgroundPosition: 'center',  // Centers the image within the container
				backgroundRepeat: 'no-repeat',  // Prevents repeating the image
				height: '100%',  // Ensures it takes up the full height of the container
				width: '100%',    // Ensures it takes up the full width of the container
			  }}>
			
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						{/*
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
						*/}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;

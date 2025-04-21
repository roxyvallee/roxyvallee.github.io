import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="projects-title">
							Here is my portfolio, mixed between personal and professional projects.
						</div>

						<div className="projects-subtitle">
							I had the opportunity to program on various devices and platforms through my personal and professional projects. From developing immersive MR experiences to optimizing performance for mobile games, each project has honed my problem-solving skills and adaptability. My work showcases a balance of technical expertise and creative vision, reflecting my passion for crafting engaging interactive experiences.							
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;

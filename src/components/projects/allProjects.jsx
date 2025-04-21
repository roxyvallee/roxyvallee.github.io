import React from "react";
import Project from "./project";
import myProjects from "../../data/projects";
import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {myProjects.map((getProject, index) => {
        const project = getProject();
        return (
          <div className="all-projects-project" key={index} >
            <Project
              logo={project.logo}
              background={project.background}
              title={project.title}
              description={project.description}
              linkText="View Project"
              link={`/projects/${index + 1}`} // Lien vers la page de détail du projet
            />
          </div>
        );
      })}
    </div>
  );
};

export default AllProjects;

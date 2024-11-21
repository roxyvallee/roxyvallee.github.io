import React from "react";
import Project from "./project";
import myProjects from "../../data/projects";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {myProjects.map((getProject, index) => {
        const project = getProject();
        return (
          <div className="all-projects-project" key={index}>
            <Project
              logo={project.logo}
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

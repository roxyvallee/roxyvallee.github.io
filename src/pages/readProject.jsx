import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Back from "../assets/icons/back-button.png"
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myProjects from "../data/projects"; 

import "./styles/readProject.css";

let ProjectStyle = styled.div``;

const ReadProject = () => {
  const navigate = useNavigate();
  let { id } = useParams(); 

  const project = myProjects[id - 1]; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  ProjectStyle = styled.div`
    ${project().style}
  `;

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${project().title} | ${INFO.main.title}`}</title>
        <meta name="description" content={project().description} />
        <meta name="keywords" content={project().keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar />

        <div className="content-wrapper">
          <div className="read-project-logo-container">
            <div className="read-project-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="read-project-container">
            <div className="read-project-back">
              <img
                src={Back}
                alt="back"
                className="read-project-back-button"
                onClick={() => navigate(-1)} // Bouton retour
              />
            </div>

            <div className="read-project-wrapper">
              <div className="read-project-date-container">
                <div className="read-project-date">{project().date}</div>
              </div>

              <div className="title read-project-title">
                {project().title}
              </div>

              <div className="read-project-body">
                <ProjectStyle>{project().body}</ProjectStyle>
              </div>
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

export default ReadProject;

import { useState } from "react";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import React from "react";
import data from "./ProjectsData";
import "animate.css";

const Projects = ({ onShowBannerText }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate__jackInTheBox");

  const handlePrevClick = () => {
    setAnimationClass("animate__fadeOut");
    setTimeout(() => {
      if (selectedProjectIndex === 0) {
        setSelectedProjectIndex(data.length - 1);
      } else {
        setSelectedProjectIndex((selectedProjectIndex - 1) % data.length);
      }
      setAnimationClass("animate__fadeIn");
    }, 300);
  };

  const handleNextClick = () => {
    setAnimationClass("animate__fadeOut");
    setTimeout(() => {
      if (selectedProjectIndex === data.length - 1) {
        setSelectedProjectIndex(0);
      } else {
        setSelectedProjectIndex((selectedProjectIndex + 1) % data.length);
      }
      setAnimationClass("animate__fadeIn");
    }, 300);
  };

  const handleShowProjects = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setShowProjects(true);
    setShowProjectsModal(true);
    onShowBannerText(false);
  };

  const handleCloseProjectsModal = (event) => {
    event.preventDefault();
    setShowProjectsModal(false);
    setShowProjects(false);
    onShowBannerText(true);
  };

  return (
    <>
      {showProjects && (
        <div className="overlay">
          <button
            className="close-modal-btn"
            onClick={handleCloseProjectsModal}
          >
            <FaTimes />
          </button>
          <div className="projects-container">
            <div className="projects-soon"></div>
            <div className="projects-grid">
              <div className="project-carousel">
                <button
                  className="arrow-btn left-arrow"
                  onClick={handlePrevClick}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="arrow-btn right-arrow"
                  onClick={handleNextClick}
                >
                  <FaChevronRight />
                </button>
                <div className="project-carousel-image">
                  <img
                    className={`project-carousel-img animate__animated ${animationClass}`}
                    src={data[selectedProjectIndex].image}
                    alt={data[selectedProjectIndex].title}
                  />
                </div>
                <div className="project-carousel-info">
                  <h3 className="text-center">
                    {data[selectedProjectIndex].title}
                  </h3>
                  <p>{data[selectedProjectIndex].description}</p>
                  <div className="buttons">
                    <a
                      href={data[selectedProjectIndex].githubUrl}
                      className="button"
                    >
                      View Github
                    </a>
                    <a
                      href={data[selectedProjectIndex].projectUrl}
                      className="button"
                    >
                      View Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showProjects && (
        <button className="showProjectsBtn" onClick={handleShowProjects}>
          Show Projects
        </button>
      )}

      <style jsx>{`
        .arrow-btn {
          position: absolute;
          top: 80%;
          transform: translateY(-50%);
        }

        .left-arrow {
          left: -1.5rem;
        }

        .right-arrow {
          right: -1.5rem;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 10%;
          z-index: 1000;
        }
        .close-modal-btn {
          position: absolute;
          top: -5rem;
          right: 1rem;
          background-color: transparent;
          color: white;
          border: none;
          outline: none;
          font-size: 2rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .close-modal-btn:hover {
          color: #ff0000;
        }
        .projects-container {
          width: 600px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .project-carousel {
          position: relative;
        }
        .project-carousel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 15px;
        }
        .project-carousel-info {
          padding: 1.5rem;
          color: white;
          text-align: center;
        }
        .project-carousel-info h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .project-carousel-info p {
          margin-bottom: 1rem;
        }
        .buttons {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }
        .buttons a {
          background-color: transparent;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
          margin: 0 1rem;
          border: 1px solid white;
        }
        .buttons a:hover {
          background-color: white;
          color: black;
        }
        .showProjectsBtn {
          opacity: 50%;
          padding: 0.5em 0.9em;
          background-color: transparent;
          color: #2b2b2b;
          border: none;
          font-size: 16px;
          cursor: pointer;
          user-select: none;
          touch-action: manipulation;
          transition: all 0.3s ease-in-out;
        }
        .showProjectsBtn:hover,
        .showProjectsBtn:focus-visible {
          outline: 3px solid #2b2b2b;
          outline-offset: 0.05em;
        }
        .showProjectsBtn:active {
          background-color: #2b2b2b;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Projects;

import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/ProjectDelivered.css';

function ProjectDelivered() {
  return (
    <div className="project-delivered">
      <div className="text-content">
        <h2 className="project-heading">Our Delivered Projects</h2>
        <p className="project-subheading">
          Explore our recent work that reflects creativity, precision, and quality development.
        </p>
      </div>

      <div className="project-cards">
        <div
          className="project-card"
          style={{ backgroundImage: "url('/Images/dubaiproject.png')" }}
        >
          <div className="overlay">
          <a href="" className="visit-button">
              Visit Live
            </a>
          </div>
        </div>

        <div
          className="project-card"
          style={{ backgroundImage: "url('/Images/hms.png')" }}
        >
          <div className="overlay">
            <a href="" className="visit-button">
              Visit Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDelivered;

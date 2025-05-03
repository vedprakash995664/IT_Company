import React from "react";
import './CSS/WhyChoose.css';

const WhyChoose = () => {
  return (
    <div className="why-choose-container">
      <div className="why-choose-inner">
        <h2 className="heading">Why Should We Choose You?</h2>
        <div className="content">
          <div className="stats">
            <div className="stat-box">
              <div className="icon">📄</div>
              <h3>256+</h3>
              <p>Projects Launched</p>
            </div>
            <div className="stat-box">
              <div className="icon">⭐</div>
              <h3>316+</h3>
              <p>Satisfied Customers</p>
            </div>
            <div className="stat-box">
              <div className="icon">🏅</div>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-box">
              <div className="icon">🧲</div>
              <h3>95%+</h3>
              <p>Client Retention</p>
            </div>
          </div>
          <div className="image-section">
            <img
              src="/Images/handsaking.jpg"
              alt="Handshake"
              className="why-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

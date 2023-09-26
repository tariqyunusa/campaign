import React from "react";
import "../styles/Work.css";

const Work = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <>
      <section className="work">
        <div className="work-section">
          <h1>AREAS WE SPECIALISE IN </h1>
        </div>
        <div
          className="wrap"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="main-content">
            <div className="cover-wrapper">
              <h4>Development</h4>
            </div>
          </div>
          <div className="main-content">
            <div className="cover-wrapper">
              <h4>Design</h4>
            </div>
          </div>
          <div className="main-content">
            <div className="cover-wrapper">
              <h4>Branding</h4>
            </div>
          </div>
          <div className="main-content">
            <div className="cover-wrapper">
              <h4>Cinematography</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;

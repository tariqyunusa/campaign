import React from "react";
import video from "../assets/video.mp4";
import "../styles/landing.css";

const landing = ({ setIsHoveringLink }) => {
  const handleMouseEnter = () => {
    setIsHoveringLink(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringLink(false);
  };

  return (
    <section className="conatiner">
      <div className="main_text">
        <h1>Where The Genius Of History Meets The Vision Of Tomorrow.</h1>
      </div>
      <div className="video">
        <video
          src={video}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
};

export default landing;

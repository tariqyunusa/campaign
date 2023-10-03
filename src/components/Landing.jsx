import React, { useEffect, useRef } from "react";
import video from "../assets/video.mp4";
import "../styles/landing.css";
import { gsap } from "gsap";

const landing = ({ setIsHoveringLink }) => {
  const handleMouseEnter = () => {
    setIsHoveringLink(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringLink(false);
  };
  const landingRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(videoRef.current, {
      y: -50,
      duration: 1,
    });
    tl.to(landingRef.current, {
      y: -20,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    });
  }, []);

  return (
    <section className="landing">
      <div className="main_text">
        <h1 className="landing_h1" ref={landingRef}>
          Where The Genius Of History Meets The Vision Of Tomorrow.
        </h1>
      </div>
      <div className="video">
        <video
          ref={videoRef}
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

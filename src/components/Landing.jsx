import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import video from "../assets/output.mp4";
import "../styles/landing.css";
import  gsap  from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)



const landing = ({ setIsHoveringLink }) => {
  const [videoDownloaded, setIsVideoDownloaded] = useState(false)
  const handleMouseEnter = () => {
    setIsHoveringLink(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringLink(false);
  };
  const landingRef = useRef(null);
  const videoRef = useRef(null);
  useLayoutEffect(() => {
    if(!videoDownloaded) {
      return;
    }
    let tl = gsap.timeline({
     
    });
   tl.to(landingRef.current,  {clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`, y: -20})
   .to(videoRef.current, { scrollTrigger: {
    trigger: videoRef.current,
    // markers: true,
    start: "top top",
    scrub: true,
    end: "bottom bottom",
    ease: "power2.inOut",
  },scale: 1})
    
   
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

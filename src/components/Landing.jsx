import React, { useEffect, useRef, useLayoutEffect } from "react";
import video from "../assets/video.mp4";
import "../styles/landing.css";
import  gsap  from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { Power4 } from "gsap";
gsap.registerPlugin(ScrollTrigger)



const landing = ({ setIsHoveringLink }) => {
  const handleMouseEnter = () => {
    setIsHoveringLink(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringLink(false);
  };
  const landingRef = useRef(null);
  const videoRef = useRef(null);
  useLayoutEffect(() => {
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
  },scale: 1,  }, )
      // .to(videoRef.current, { scrollTrigger: {
      //   trigger: videoRef.current,
      //   // markers: true,
      //   start: "top top",
      //   scrub: true,
      //   end: "bottom bottom",
      //   ease: "power2.inOut",
      // },width: '100vw', duration: 2  })
   
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

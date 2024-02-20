import React, { useEffect, useRef } from "react";
import "../styles/Work.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Dev from "../assets/Development.jpg"
import Cine from "../assets/Cinematography.jpg"
import Brand from "../assets/Branding.jpg"
import Design from "../assets/Design.jpg"
gsap.registerPlugin(ScrollTrigger);

const Work = ({ onMouseEnter, onMouseLeave }) => {
  const H1Ref = useRef(null)
  useEffect(() => {
    gsap.to(H1Ref.current, {
      scrollTrigger: {
        trigger: H1Ref.current,
        start: "top-=200 top+=100",
        end: "bottom-=180 top+=100",
        scrub: true,
        // markers: true
      },
      y: -100, opacity: 1, 
    })
  },[])
  return (
    <>
      <section className="work">
        <div className="work-section">
          <h1 className="work-h1" ref={H1Ref}>AREAS WE SPECIALISE IN </h1>
        </div>
        <div
          className="wrap"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="main-content">
            <img src={Dev} alt="development" srcset="" />
            <div className="cover-wrapper">
              <h4>Development</h4>
            </div>
          </div>
          <div className="main-content">
          <img src={Design} alt="development" srcset="" />
            <div className="cover-wrapper">
              <h4>Design</h4>
            </div>
          </div>
          <div className="main-content">
          <img src={Brand} alt="development" srcset="" />
            <div className="cover-wrapper">
              <h4>Branding</h4>
            </div>
          </div>
          <div className="main-content">
          <img src={Cine} alt="development" srcset="" />
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

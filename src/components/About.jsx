import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutHeaderRef = useRef(null);
  const RightSideH3Ref = useRef(null);

  return (
    <>
      <div className="about">
        <div className="about_header">
          <h1 className="about_h1">
            INCORPORATE WISDOM AND BRILLIANCE OF THE PAST WITH FAST FORWARD
            THINKING AND AN INNOVATIVE VISION FOR THE FUTURE
          </h1>
        </div>
        <section>
          <div className="left_side">
            <h1>*</h1>
          </div>
          <div className="right_side">
            <div className="rhs-2">
              <h3 ref={RightSideH3Ref} className="right_h3">
                AT CAMPAIGN OUR GOAL IS YOUR GOAL
              </h3>
            </div>

            <p>
              we are a Nigerian Based Creative Agency whose niche is drawing
              inspiration from the great minds of history while applying that
              wisdom to contemporary and future creative endeavours This
              juxtaposition of the past and the future promises a unique and
              dynamic approach to creativity and design, making your agency
              stand out as a bridge between tradition and innovation.
            </p>
            <a href="">Reach Out</a>
            <a href="">See Our Work</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

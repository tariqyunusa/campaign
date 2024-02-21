import React, { useEffect, useLayoutEffect, useRef } from "react";
import "../styles/About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const About = () => {
  const aboutRef = useRef(null)
  const aboutHeaderRef = useRef(null);
  const RightSideH3Ref = useRef(null);
  const textRef = useRef(null);
  const starRef = useRef(null)
  const linksRef = useRef(null)
  linksRef.current = []

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({})

    // header animation
    
    timeline.to(aboutHeaderRef.current, {scrollTrigger:{
      trigger: aboutHeaderRef.current,
      start: "top-=100 top+=200",
      end : "top+=20 top+=220",
      scrub: true,
      // markers: true,
      ease: "power2.inOut",
    },y: -100, duration: .5, opacity: 1,})

    // rightSide Animation

    .to(starRef.current, {
      scrollTrigger: {
        trigger: starRef.current,
        start: "top-=150 top+=100",
       scrub: true,
      //  markers: true,
       end: "top+=100 top+=200"
      },
      x: 100, opacity: 1, duration: .5
    })

    // leftside header animation

    .to(RightSideH3Ref.current, {
      scrollTrigger: {
        trigger: RightSideH3Ref.current,
        start: "top-=150 top+=200",
        end: "bottom-=100 top+=200",
        // markers: true,
        ease: "power2.inOut",
        scrub: true

      },
      y: -100 , opacity: 1, duration: .5
    })

    // text animation

    .to(textRef.current, {
      scrollTrigger: {
        trigger: RightSideH3Ref.current,
        start: "top top+=300",
        end: "top+=100 top+=320",
        // markers: true,
        scrub: true

      },
      y: -100 , opacity: 1, duration: .5, delay: 1
    })

    // links animation

    .to(linksRef.current, {
      scrollTrigger: {
        trigger: linksRef.current,
        start: "top-=100 top+=300",
        end: "top-=200 top+=220",
        // markers: true,
        scrub: true

      },
      y: -100 , opacity: 1, duration: .5, stagger: 1
    })
  },[])
 const linkedToRef = (el) => {
  if(el && !linksRef.current.includes(el)){
    linksRef.current.push(el)
  }
  // console.log(linksRef.current);
}

  return (
    <>
      <section className="about" ref={aboutRef}>
        <div className="about_header"  >
          <h1 className="about_h1" ref={aboutHeaderRef}>
            INCORPORATE WISDOM AND BRILLIANCE OF THE PAST WITH FAST FORWARD
            THINKING AND AN INNOVATIVE VISION FOR THE FUTURE
          </h1>
        </div>
        <section>
          <div className="left_side">
            <h1 ref={starRef}>*</h1>
          </div>
          <div className="right_side">
            <div className="rhs-2">
              <h3 ref={RightSideH3Ref} className="right_h3">
                AT CAMPAIGN OUR GOAL IS YOUR GOAL
              </h3>
            </div>

            <p ref={textRef} className="text_about">
              we are a Nigerian Based Creative Agency whose niche is drawing
              inspiration from the great minds of history while applying that
              wisdom to contemporary and future creative endeavours This
              juxtaposition of the past and the future promises a unique and
              dynamic approach to creativity and design, making your agency
              stand out as a bridge between tradition and innovation.
            </p>
            <a href="" ref={linkedToRef} className="links_about">Reach Out</a>
            <a href="" ref={linkedToRef} className="links_about">See Our Work</a>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/Loader.css";

const Loader = () => {
  const blackRef = useRef(null);
  const whiteRef = useRef(null);
  const orangeRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(whiteRef.current, { left: "100%", duration: 1.5 });
    tl.to(
      h1Ref.current,
      { y: -20 },
      "+=0" // Ensure that the previous animation and this one run concurrently
    );
    tl.to(
      h1Ref.current,
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 0.5,
      },
      "<" // Add this to start the animation at the same time as the previous one
    ).to(orangeRef.current, { x: "100%", duration: 1.5 });

    // Clear all inline styles after the animation
    tl.set(h1Ref.current, {
      clearProps: "all",
    });
  }, []);
  return (
    <>
      <div className="loader">
        <div className="black" ref={blackRef}></div>
        <div className="white" ref={whiteRef}></div>
        <div className="orange" ref={orangeRef}>
          <h1 className="loader_h1" ref={h1Ref}>
            CAMPAIGN.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loader;

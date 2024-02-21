import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import "./App.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Work from "./components/Work";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


function App() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [ishoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringWork, setIsHoveringWork] = useState(false);
  const [isHoveringReview, setIsHoveringReview] = useState(false)
  const [isHoveringReviewLeft, setIsHoveringReviewLeft] = useState(false)
  const [reviewCursor, setReviewCursor] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);
  useEffect(() => {
    // the function that handles the cursor position
    function handleMouseMove(e) {
      setCursorPosition({ top: e.pageY, left: e.pageX });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // })
    // lenis.on('scroll', ScrollTrigger.update)

    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000)
    // })
    // gsap.ticker.lagSmoothing(0)
  },[])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div
            className={`cursor ${ishoveringLink ? "scaling" : ""} ${
              isHoveringWork ? "black-cursor" : ""
            } ${isHoveringReview ? "hovering_review" : ""} ${isHoveringReviewLeft ? "hovering_left" : ""}`}
            style={{ top: cursorPosition.top, left: cursorPosition.left }}
          >
            {isHoveringReview ? (
              <div className="right">
              <FaArrowRight />
              </div>
            ): (
              <div className="left">
              <FaArrowLeft />
              </div>
            )}
          </div>
          <Navigation setIsHoveringLink={setIsHoveringLink} />
          <Landing setIsHoveringLink={setIsHoveringLink} />
          <About setIsHoveringLink={setIsHoveringLink} />
          <Work
            onMouseEnter={() => setIsHoveringWork(true)}
            onMouseLeave={() => setIsHoveringWork(false)}
            setIsHoveringLink={setIsHoveringLink}
          />
          <Review  cursorPosition={cursorPosition}  setIsHoveringReview={setIsHoveringReview} setIsHoveringReviewLeft={setIsHoveringReviewLeft}/>
          <Footer setIsHoveringLink={setIsHoveringLink} />
        </div>
      )}
    </>
  );
}

export default App;

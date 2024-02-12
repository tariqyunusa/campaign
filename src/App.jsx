import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import "./App.css";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Work from "./components/Work";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [ishoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringWork, setIsHoveringWork] = useState(false);
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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div
            className={`cursor ${ishoveringLink ? "scaling" : ""} ${
              isHoveringWork ? "black-cursor" : ""
            }`}
            style={{ top: cursorPosition.top, left: cursorPosition.left }}
          ></div>
          <Navigation setIsHoveringLink={setIsHoveringLink} />
          <Landing setIsHoveringLink={setIsHoveringLink} />
          <About setIsHoveringLink={setIsHoveringLink} />
          <Work
            onMouseEnter={() => setIsHoveringWork(true)}
            onMouseLeave={() => setIsHoveringWork(false)}
            setIsHoveringLink={setIsHoveringLink}
          />
          <Review  cursorPosition={cursorPosition} />
          <Footer setIsHoveringLink={setIsHoveringLink} />
        </div>
      )}
    </>
  );
}

export default App;

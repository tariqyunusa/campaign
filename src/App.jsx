import { useEffect, useState } from "react";
import Landing from "./components/landing";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [ishoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
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
      <div
        className={`cursor ${ishoveringLink ? "scaling" : ""}`}
        style={{ top: cursorPosition.top, left: cursorPosition.left }}
      ></div>
      <Navigation setIsHoveringLink={setIsHoveringLink} />
      <Landing setIsHoveringLink={setIsHoveringLink} />
    </>
  );
}

export default App;

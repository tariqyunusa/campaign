import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });

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
        className="cursor"
        style={{ top: cursorPosition.top, left: cursorPosition.left }}
      ></div>
    </>
  );
}

export default App;

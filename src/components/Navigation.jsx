import React, { useState, useRef } from "react";
import "../styles/Navigation.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes, FaBars, FaHandHolding } from "react-icons/fa";

function Navigation({ setIsHoveringLink }) {
  const handleMouseEnter = () => {
    setIsHoveringLink(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringLink(false);
  };

  const navRef = useRef();

  const showBar = () => {
    navRef.current.classList.toggle("toggle-menu");
  };

  return (
    <>
      <header>
        <div className="logo">
          <h2>CAMPAIGN</h2>
        </div>
        <nav ref={navRef}>
          <ul>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="">About</a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="">Case Studies</a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="">Reviews</a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="">Work Flow</a>
            </li>
            <button
              className="nav-btn nav-close"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={showBar}
            >
              <FaTimes />
            </button>
          </ul>
        </nav>
        <button
          className="nav-btn"
          onClick={showBar}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaBars />
        </button>
        <div className="reach">
          <a
            href=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Work With Us
          </a>
        </div>
      </header>
    </>
  );
}

export default Navigation;

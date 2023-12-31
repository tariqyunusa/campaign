import React from "react";
import "../styles/Footer.css";
import arrow from "../assets/arrow-right.png";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { useState } from "react";
const Footer = ({ setIsHoveringLink }) => {
  const [value, setValue] = useState("");
  const handleMouseEnter = () => {
    setIsHoveringLink(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringLink(false);
  };
  const handleClick = () => {
    setValue("");
    alert("Thank You For Your Interest You Will Recieve A Mail.");
  };
  return (
    <>
      <footer className="footer-container">
        <div className="footer_container__left">
          <div className="heading">
            <h1>CAMPAIGN</h1>
          </div>
          <h3>
            Recieve mails from us about branding, strategy,
            <br /> design and upcoming events
          </h3>
          <div className="input">
            <form action="submit" typeof="submit"></form>
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Enter Your Email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" onClick={handleClick}>
              <img src={arrow} alt="" />
            </button>
          </div>

          <p>
            By signing up to receive emails from Campaign, you agree to our
            <span>Privacy Policy</span> . We treat your info responsibly.
            Unsubscribe anytime.
          </p>
          <div className="social-icons">
            <a
              href=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <AiOutlineInstagram />
            </a>
            <a
              href=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <RiTwitterXLine />
            </a>
            <a
              href=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <BiLogoFacebook />
            </a>
            <a
              href=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <AiOutlineYoutube />
            </a>
          </div>
        </div>
        <div className="footer_container__right">
          <h1>*</h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React, { useEffect, useRef } from "react";
import "../styles/Footer.css";
import arrow from "../assets/arrow-right.png";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Footer = ({ setIsHoveringLink }) => {
  const footerContainer = useRef(null)
  const footerHeaderRef = useRef(null)
  const footerSpanRef  = useRef(null)
  const inputRef = useRef(null)
  const paraRef = useRef(null)
  const astRef = useRef(null)
  const socialsRef = useRef([])
  socialsRef.current = []

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
  const addSocials = (el) => {
    if(el && !socialsRef.current.includes(el)){
      socialsRef.current.push(el)
    }
    // console.log(socialsRef.current);
  }
  useEffect(() => {
    const tl = gsap.timeline({scrollTrigger: {
      trigger: footerContainer.current,
      start: "top-=200 top+=100",
      end: "top-=50 top+=100",
      // markers: true,
      scrub: true 
    }})
    tl.to(footerHeaderRef.current, {
      y: -100, opacity: 1
    })
    .to(footerSpanRef.current, {
      y: -100, opacity: 1
    })
    .to(inputRef.current, {
      y: -100, opacity: 1
    })
    .to(paraRef.current, {
      y: -100, opacity: 1
    })
    .to(astRef.current, {
      x: -100, opacity: 1
    })
    .to(socialsRef.current, {
      y: -100, opacity: 1, stagger: 0.5
    })
    
  },[])
  return (
    <>
      <footer className="footer-container" ref={footerContainer}>
        <div className="footer_container__left">
          <div className="heading">
            <h1 ref={footerHeaderRef} className="footer_heading__h1">CAMPAIGN</h1>
          </div>
          <h3 ref={footerSpanRef} className="footer_container__left_h3">
            Recieve mails from us about branding, strategy,
            <br /> design and upcoming events
          </h3>
          <div className="input">
            <form action="submit" typeof="submit"  className="form" ref={inputRef}>
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
            </form>
          </div>

          <p ref={paraRef} className="footer_p__p">
            By signing up to receive emails from Campaign, you agree to our
            <span>Privacy Policy</span> . We treat your info responsibly.
            Unsubscribe anytime.
          </p>
          <div className="social-icons">
            <a
              href=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={addSocials}
              className="social-icons_a"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={addSocials}
              className="social-icons_a"
            >
              <RiTwitterXLine />
            </a>
            <a
              href=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={addSocials}
              className="social-icons_a"
            >
              <BiLogoFacebook />
            </a>
            <a
              href=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={addSocials}
              className="social-icons_a"
            >
              <AiOutlineYoutube />
            </a>
          </div>
        </div>
        <div className="footer_container__right">
          <h1 ref={astRef} className="footer_container__right_h1">*</h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;

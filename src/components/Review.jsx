import React, { useEffect, useState } from "react";
import Data from "../../Data";
import "../styles/Review.css";
import { useReducer } from "react";
import { useRef } from "react";
import gsap from "gsap";

const Review = ({cursorPosition}) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewRef = useRef(null)
  const review = reviewRef.current

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };
  const reviewAnim = () => {
    const reviewContainer = reviewRef.current;
    const containerWidth = reviewContainer.offsetWidth;
    const containerLeft = reviewContainer.offsetLeft;

    if (cursorPosition.x >  reviewContainer.offsetWidth/2) {
      console.log("hello");
    }
    else{
      console.log("hi");
      setCurrentReviewIndex((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
    }
   console.log(reviewContainer.offsetWidth);
  };

  
  // console.log(review);
  // console.log(cursorPosition);
  return (
    <>
      <div className="Review-container">
        <div className="header-review" >
          <h2>REVIEWS</h2>
          <h2>{currentReviewIndex + 1} - 8</h2>
        </div>
        <div className="reviews" ref={reviewRef}>
          <div className="review"  onClick={reviewAnim}>
            <h1 className="reviw_h1">"{Data[currentReviewIndex].quote}"</h1>
            <h3>{Data[currentReviewIndex].name}</h3>
            <h3>{Data[currentReviewIndex].org}</h3>
          </div>
        </div>
        <div className="navigation-buttons">
          <a onClick={prevReview}>Previous</a>
          <a onClick={nextReview}>Next</a>
        </div>
      </div>
    </>
  );
};

export default Review;

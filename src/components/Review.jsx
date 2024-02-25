import React, { useEffect, useState } from "react";
import Data from "../../Data";
import "../styles/Review.css";
import { useReducer } from "react";
import { useRef } from "react";
import gsap from "gsap";

const Review = ({cursorPosition, setIsHoveringReview, setIsHoveringReviewLeft}) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewRef = useRef(null)
  const review = reviewRef.current
  const reviewQuoteRef = useRef(null)
  const reviewNameRef = useRef(null)
  const reviewOrgRef = useRef(null)
  const ReviewHeaderRef = useRef(null)
  const ReviewIndexRef = useRef(null)
  const ReviewSectionRef = useRef(null)
  
  const hoverReviewEnter= () => {
    const reviewContainer = reviewRef.current;
    if (cursorPosition.left <  reviewContainer.offsetWidth/2){
      setIsHoveringReviewLeft(true)
      setIsHoveringReview(false)
    }else{
      setIsHoveringReview(true)
      setIsHoveringReviewLeft(false)
    }  
  }
  const hoverReviewLeave = () => {
      setIsHoveringReviewLeft(false)
      setIsHoveringReview(false)
    
   
  }
  
  
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
    const tl = gsap.timeline({ });
    const reviewContainer = reviewRef.current;

    if (cursorPosition.left <  reviewContainer.offsetWidth/2) {
      console.log("previous comment");
      setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    )}
     else if(cursorPosition.left >  reviewContainer.offsetWidth/2){
      console.log("next comment");
      setCurrentReviewIndex((nextIndex) =>
      nextIndex === Data.length - 1 ? 0 : nextIndex + 1
    )
    tl.to(reviewQuoteRef.current,{scrollTrigger: {
      trigger: ReviewHeaderRef.current,
      start: "top-=200 top+=100",
      end: "top-=150 top+=50",
      // markers: true,
      scrub: true
    },
     y: -100, opacity: 1
    })}
  //  console.log(cursorPosition);
  //  console.log(currentReviewIndex);
  };
// review animation


  useEffect(() => {
    const tl = gsap.timeline({ scrollTrigger: {
      trigger: ReviewSectionRef.current,
      start: "top-=200 top+=100",
      end: "top-=100 top+=50",
      // markers: true,
      scrub: true
    },})

    // header and index animation 

    tl.to(ReviewHeaderRef.current, {
      y: -100, opacity: 1
    })
    .to(ReviewIndexRef.current,{
      y: -100, opacity: 1
    })

    // quote animation

    tl.to(reviewQuoteRef.current,{
     y: -100, opacity: 1
    })
    // name animation

    tl.to(reviewNameRef.current,{
     y: -100, opacity: 1
    })

    // org animation

    tl.to(reviewOrgRef.current,{
      y: -100, opacity: 1
     })

  },[])
  
  // console.log(review);
  // console.log(cursorPosition);
  return (
    <>
      <div className="Review-container" ref={ReviewSectionRef}>
        <div className="header-review" >
          <h2 ref={ReviewHeaderRef} className="review_header">REVIEWS</h2>
          <h2 ref={ReviewIndexRef} className="review_index">{currentReviewIndex + 1} - 8</h2>
        </div>
        <div className="reviews" ref={reviewRef} onMouseEnter={hoverReviewEnter } onMouseLeave={hoverReviewLeave} onClick={reviewAnim} >
          <div className="review"   >
            <h1 className="reviw_h1" ref={reviewQuoteRef}>"{Data[currentReviewIndex].quote}"</h1>
            <h3 ref={reviewNameRef} className="review_name__h3">{Data[currentReviewIndex].name}</h3>
            <h3 ref={reviewOrgRef} className="review_quote__h3">{Data[currentReviewIndex].org}</h3>
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

import React from 'react'
import { useState } from 'react'
import placeholder from "../assets/placeholder.jpg"
import "../styles/VideoComponent.css"

const VideoComponent = ({src, setIsHoveringLink }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)
    const handleMouseEnter = () => {
        setIsHoveringLink(true);
      };
    
      const handleMouseLeave = () => {
        setIsHoveringLink(false);
      };

    const handleVideo = () => {
        setIsVideoLoaded(true)
    }
  return (
    <div className='video_container'>
        {!isVideoLoaded ? <img src={placeholder} className='placeholder'/> : <video
          
          src={src}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoPlay
          loop
          muted
          
        />}  
        
    </div>
   
  )
}

export default VideoComponent

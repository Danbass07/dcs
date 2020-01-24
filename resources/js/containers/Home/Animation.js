import React, { useRef, useEffect, useState, createRef } from "react";
import styled, { keyframes } from "styled-components";
import { gsap, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";

const Animation = React.memo(props => {
    let cardRef = useRef([]);
  
    useEffect(() => {
      console.log(cardRef);
  
      // testimonial animation
      gsap.to(cardRef.current, 10, {
        scale: 0,
      }, 0.3);
    }, []);
    return (
        <div className="card-container">
             <div className="card" ref={element => {cardRef.current[0] = element;}} >
               <h1>Card 1</h1>
             </div>
            <div className="card" ref={element => {cardRef.current[1] = element;}}  >
               <h1>Card 2</h1>
             </div>
            <div className="card"  ref={element => {cardRef.current[2] = element;}} >
               <h1>Card 3</h1>
             </div>
          </div>
      );
    
});

export default Animation;
// if (document.getElementById('Welcome')) {
//     ReactDOM.render(<Welcome />, document.getElementById('Welcome'));
// }

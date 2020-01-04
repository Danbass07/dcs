import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Friend = React.memo(props => {

    let keyFrameExampleOne = keyframes`
    0% {
      transform: scale(0.05);
    }
    100% {
      transform: scale(0.90);
    }
    `
  if(props.animation) {
     keyFrameExampleOne = keyframes`
    0% {
     
    }
    100% {
      transform: scale(0.05);
    }
    `
  }
 
    const MainWrapper = styled.button`
        height: ${props.height};
        width:  ${props.width};
        background-image: url(/images/logo${props.friend.name}.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-color: rgb(8, 7, 28, 0);
        border: none;
        order: ${props.order};
        margin: auto auto;
        transition: transform 300ms ease-in-out;
        animation: ${keyFrameExampleOne} 3s 1;
        transform: scale(0.9);
        &:hover {
          transform: scale(1.15);
    `;

    return (
            <MainWrapper  onClick={() => props.togglePopUp()}
            
            ></MainWrapper>

    );
});

export default Friend;

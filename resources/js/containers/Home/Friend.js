import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Friend = React.memo(props => {

    let keyFrameExampleOne = keyframes`
    0% {
    
    }
    100% {
     
    }
    `
  if(props.animation) {
     keyFrameExampleOne = keyframes`
    0% {
      height: ${props.height};
      width:  ${props.width};
    }
    100% {
      height: 0;
      width: 0;
    }
    `
  }
 
    const MainWrapper = styled.div`
        height: ${props.height};
        width:  ${props.width};
        background-image: url(/images/logo${props.friend.name}.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        order: ${props.order};
        transition: transform 300ms ease-in-out;
        animation: ${keyFrameExampleOne} 7s 1;
        &:hover {
          transform: rotate(20deg)
        }
    `;

    return (
        <React.Fragment>
            <MainWrapper  onClick={() => props.togglePopUp()}
            
            ></MainWrapper>
        </React.Fragment>
    );
});

export default Friend;

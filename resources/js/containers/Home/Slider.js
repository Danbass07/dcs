import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Friend from "./Friend";

const Slider = React.memo(props => {
  
    let keyFrameExampleOne = keyframes`
    0% {
      transform: translateX(0);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
    `
  if(props.animation) {
     keyFrameExampleOne = keyframes`
     0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
    `
  }
    const MainWrapper = styled.div`
    height:80%;
    display: flex;`;


    const Button = styled.button`
    animation: ${keyFrameExampleOne} 5s 1;
    height: 105%;
    position: relative;
    z-index: 2;
    background-color:${props.theme.colorFour};
    border: 0px;
    `;
    return (
        <MainWrapper >
            <Button   onClick={() => {
              
                    props.changeSlide(+props.index + 1)
                } }
              
            >
                LEFT
            </Button>
            <Friend
               togglePopUp={() => props.togglePopUp()}
                height={"100%"}
                width={"70%"}
                order={0}
                friend={props.friend}
                animation={props.animation}
            />
            <Button
                onClick={() => {
                    props.changeSlide(+props.index - 1);
                }}
            >
                Right
            </Button>
   
        </MainWrapper>
    );
});

export default Slider;

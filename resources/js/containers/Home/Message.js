import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Message = React.memo(props => {

    let keyFrameExampleOne = keyframes`
    0% {
        left: -50%;
    }
    50% {
        left: 30%;
    }
    80% {
        left: 50%;
    }
    100% {
        left: 100%;
    }
    `
 
 
    const MainWrapper = styled.button`
        height: 90px;
        width: 300px;
        position: absolute;
        top: 25%;
        left: 200%;
        background-color: rgb(8, 7, 28, 0);
        border: none;
        animation: ${keyFrameExampleOne} 10s infinite;
        x-index: 100;
        color:  #98878f;
        font-size:28px;
 
    `;

    return (
            <MainWrapper>
                WELCOME 
            </MainWrapper>

    );
});

export default Message;

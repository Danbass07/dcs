import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const BottomManu = React.memo(props => {
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
        left: 100%; }`;

    const MainWrapper = styled.div`
        width: 100%;
        height: 32px;
        position: absolute;
        bottom: 0;
        background-color: ${props.theme.colorFour};
        display: flex;
        justify-content: space-between;
        min-width: 330px;
    `;

    const Bubble = styled.button`
        width: 160px;
        height: 50px;
        position: relative;
        bottom: 30px;
        background-color: inherit;
        border-radius: 20px 25em 10px 5%;
        border: 0px;
        z-index: 5;
        text-align: center;
        align-content: center;
        padding-top: 15px;
        font-size: 20px;
        color: ${props.theme.colorOne};
        margin-left: -10px;
    `;

    const BubbleRight = styled.button`
        width: 160px;
        height: 50px;
        position: relative;
        bottom: 30px;
        background-color: inherit;
        border-radius: 25em 10px 20px 5%;
        z-index: 5;
        text-align: center;
        align-content: center;
        padding-top: 15px;
        font-size: 20px;
        color: ${props.theme.colorOne};
        border: 0px;
        margin-right: -10px;
    `;
    const Text = styled.div`
        color: ${props.theme.colorOne};
        font-size: 1.5vw;
    `;
    return (
        <MainWrapper>
            <Bubble onClick={() => props.themeChange(-1)}>Previous</Bubble>
            <Text>Change Colors</Text>
            <BubbleRight onClick={() => props.themeChange(1)}>Next</BubbleRight>
        </MainWrapper>
    );
});

export default BottomManu;

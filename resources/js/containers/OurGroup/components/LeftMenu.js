import React, { useState } from "react";
import styled from "styled-components";

const LeftMenu = React.memo(props => {
    const MainWrapper = styled.div`
        height: 400px
        width: 36%;
        background-color: ${props.theme.colorThree};
        border: 4px ridge ${props.theme.colorTwo};
        color:${props.theme.colorFive};
        margin: auto auto;
        text-align: center;
        display: flex;
    `;
    const Click = styled.div`
        width: 15%;
        height: 100%;
        background-color: ${props.theme.colorFour};
        margin-left: auto;
    `;
    return (
        <MainWrapper>
            <div onClick={() => props.moveSection(-32)}>LeftMenu</div>
            <Click onClick={() => props.moveSection(0)} />
        </MainWrapper>
    );
});

export default LeftMenu;

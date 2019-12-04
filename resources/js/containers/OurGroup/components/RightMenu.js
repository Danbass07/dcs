import React from "react";
import styled from "styled-components";

const RightMenu = props => {
    const MainWrapper = styled.div`
        height: 400px;
        width: 400px;
        background-color: ${props.theme.colorOne};
        border: 4px ridge ${props.theme.colorTwo};
        color:${props.theme.colorFive};
        margin: auto auto;
        text-align: center;
        
    `;
    return <MainWrapper>
       RightMenu
    </MainWrapper>;
};

export default RightMenu;

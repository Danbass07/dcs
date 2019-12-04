import React from "react";
import styled from "styled-components";

const TopMenu = props => {
    const MainWrapper = styled.div`
    display:none;
        height: 400px;
        width: 400px;
        background-color: ${props.theme.colorOne};
        border: 4px ridge ${props.theme.colorTwo};
        color:${props.theme.colorFive};
        margin: auto auto;
        text-align: center;
        position:relative;
        top: -380px;
        margin-bottom: -380px;
    `;
    return <MainWrapper>
       TopMenu
    </MainWrapper>;
};

export default TopMenu;

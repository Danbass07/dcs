import React from "react";
import styled from "styled-components";

const BottomMenu = props => {
    const MainWrapper = styled.div`
        height: 400px;
        width: 90%;
        background-color: ${props.theme.colorOne};
        border: 4px ridge ${props.theme.colorTwo};
        color:${props.theme.colorFive};
        margin: auto auto;
        text-align: center;
    `;
    return <MainWrapper>
       Bottom
    </MainWrapper>;
};

export default BottomMenu;

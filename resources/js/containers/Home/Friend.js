import React, { useState } from "react";
import styled from "styled-components";

const Friend = React.memo(props => {
    const MainWrapper = styled.div`
    height: auto;
    width: 20%;
    background-image: url(/images/logo${props.friend.name}.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    order:${props.order+1};
    `;
   
    return (
        <MainWrapper>
     
        </MainWrapper>
    );
});

export default Friend;

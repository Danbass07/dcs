import React, { useState } from "react";
import styled from "styled-components";

const LeftMenu = React.memo(props => {
    const initialState = useState({
        active: true, 
    })
    let active = false
    let MainWrapper = styled.div`
        height: 400px;
        width: 400px;
        background-color: ${props.theme.colorThree};
        border: 4px ridge ${props.theme.colorTwo};
        color:${props.theme.colorFive};
        margin: auto auto;
        text-align: center;
        transform: ${initialState[0].active  ? 'translateX(425px);' : 'translateX(0);'}
    `;
    function toggle() {
      active = true;
       console.log("clicked");
       initialState[1]({active: !initialState[0].active,});
       console.log(initialState);
    }
    
    return <MainWrapper
    onClick={() => toggle()}>
       LeftMenu
    </MainWrapper>;
});

export default LeftMenu;

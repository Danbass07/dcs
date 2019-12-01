import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import InfoDisplay from "./components/InfoDisplay";
import Buttons from "./components/Buttons";

const AppBody = props => {
    const MainWrapper = styled.div`
        height: 600px;
        width: 100%;
        background-color: black;
    `;

    const TopSection = styled.div`
    height: 160px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    `;

    return (
        <MainWrapper>
            <TopSection>
                <Logo theme={props.theme} />
                <InfoDisplay theme={props.theme} />
                <Buttons 
                theme={props.theme}
                changeTheme={(themeNumber) => props.changeTheme(themeNumber)}
                />
            </TopSection>

            <div>Screen</div>
            <div>Left Menu</div>
            <div>Right Menu</div>
            <div>Top Menu</div>
            <div>Bottom Menu</div>
        </MainWrapper>
    );
};

export default AppBody;

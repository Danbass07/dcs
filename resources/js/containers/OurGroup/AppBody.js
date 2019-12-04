import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import InfoDisplay from "./components/InfoDisplay";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";

const AppBody = props => {
    const MainWrapper = styled.div`
        height: 600px;
        width: 510px;;
        background-color: black;
    `;

    const TopSection = styled.div`
        height: 160px;
        width: 510px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
       
    `;
    const MiddleSection = styled.div`
        height: 400px;
        width: 1280px;
        position: relative;
        display: flex;
        flex-direction: row;
        left: -380px;
    
    `;

    return (
        <MainWrapper>
            <div>
            <TopMenu theme={props.theme} />
            </div>
             
            <TopSection>
           
                <Logo theme={props.theme} />
                <InfoDisplay theme={props.theme} />
                <Buttons
                    theme={props.theme}
                    changeTheme={themeNumber => props.changeTheme(themeNumber)}
                />
            </TopSection>

            <MiddleSection>
                <LeftMenu theme={props.theme} />
                <Screen theme={props.theme}></Screen>
                <RightMenu theme={props.theme} />
                
            </MiddleSection>

            <BottomMenu theme={props.theme} />
        </MainWrapper>
    );
};

export default AppBody;

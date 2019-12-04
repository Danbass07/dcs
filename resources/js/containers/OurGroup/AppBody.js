import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import InfoDisplay from "./components/InfoDisplay";
import Buttons from "./components/Buttons";
<<<<<<< HEAD
=======
import Screen from "./components/Screen";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";
>>>>>>> b8fc883c872e36750bd0b7a0a0d5474391ad7b9d

const AppBody = props => {
    const MainWrapper = styled.div`
        height: 600px;
<<<<<<< HEAD
        width: 100%;
=======
        width: 510px;;
>>>>>>> b8fc883c872e36750bd0b7a0a0d5474391ad7b9d
        background-color: black;
    `;

    const TopSection = styled.div`
<<<<<<< HEAD
    height: 160px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

=======
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
    
>>>>>>> b8fc883c872e36750bd0b7a0a0d5474391ad7b9d
    `;

    return (
        <MainWrapper>
<<<<<<< HEAD
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
=======
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
>>>>>>> b8fc883c872e36750bd0b7a0a0d5474391ad7b9d
        </MainWrapper>
    );
};

export default AppBody;

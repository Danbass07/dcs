import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import InfoDisplay from "./components/InfoDisplay";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";

class AppBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            themeActive: 0,
            theme: [
                {
                    colorOne: '#000000',
                    colorTwo: '#C7493A',
                    colorThree: '#A33327',
                    colorFour: '#917164',
                    colorFive: '#AD8174',
                },
                {
                    colorOne: '#7395AE',
                    colorTwo: '#5D5C61',
                    colorThree: '#938E94',
                    colorFour: '#B0A295',
                    colorFive: '#FFFFFF',
                },
                {
                    colorOne: '#7395AE',
                    colorTwo: '#5D5C61',
                    colorThree: '#938E94',
                    colorFour: '#B0A295',
                    colorFive: '#FFFFFF',
                }
            ]
        }
    }



    changeTheme(themeNumber) {
        console.log(' change');
        this.setState({
            themeActive: themeNumber,
        })
    }
    render() {
        const MainWrapper = styled.div`
        height: 100%;
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
                    <TopMenu theme={this.state.theme[this.state.themeActive]} />
                </div>

                <TopSection>

                    <Logo theme={this.state.theme[this.state.themeActive]} />
                    <InfoDisplay theme={this.state.theme[this.state.themeActive]} />
                    <Buttons
                        theme={this.state.theme[this.state.themeActive]}
                        changeTheme={themeNumber => this.changeTheme(themeNumber)}
                    />
                </TopSection>

                <MiddleSection>
                    <LeftMenu theme={this.state.theme[this.state.themeActive]} />
                    <Screen theme={this.state.theme[this.state.themeActive]}></Screen>
                    <RightMenu theme={this.state.theme[this.state.themeActive]} />

                </MiddleSection>

                <BottomMenu theme={this.state.theme[this.state.themeActive]} />
            </MainWrapper>
        );
    }

};

export default AppBody;

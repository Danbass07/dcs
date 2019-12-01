import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppBody from "./AppBody";


class AppBrain extends Component {
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
        };
changeTheme(themeNumber) {
    this.setState({
        themeActive: themeNumber,
    })
}
    render() {

        return (
            <React.Fragment>
                <AppBody 
                theme={this.state.theme[this.state.themeActive]}
                changeTheme={(themeNumber) => this.changeTheme(themeNumber)}
                />
            </React.Fragment>
        );
    }
}

export default AppBrain;

if (document.getElementById('AppBrain')) {
    ReactDOM.render(<AppBrain />, document.getElementById('AppBrain'));
}
import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppBody from "./AppBody";


class AppBrain extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <React.Fragment>
                <AppBody 
                />
            </React.Fragment>
        );
    }
}

export default AppBrain;

if (document.getElementById('AppBrain')) {
    ReactDOM.render(<AppBrain />, document.getElementById('AppBrain'));
}
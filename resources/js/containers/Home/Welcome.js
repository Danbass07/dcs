import React, { Component } from "react";
import ReactDOM from "react-dom";
import { gsap, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";
import Animation from "./Animation";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }
    render() {

        return (
            <React.Fragment>
                <Animation 
                />
            </React.Fragment>
        );
    }
}



export default Welcome;
if (document.getElementById('Welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('Welcome'));
}

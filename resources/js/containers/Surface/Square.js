import React, { Component } from "react";
import ReactDOM from "react-dom";

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundColor: "black",
                border: "0px solid white ",
                width: "100px",
                height: "100px",
            },
            }
        };
    
    hoover() {
        const style = {
            backgroundColor: "black",
            border: "2px solid white ",
            width: "100px",
            height: "100px",
            boxShadow: "15px 15px white"
        }
        this.setState({
            style: style,
        })
    
    }
    hooverOut() {
        const style = {
            backgroundColor: "black",
            border: "0px solid white ",
            width: "100px",
            height: "100px"
        }
        this.setState({
            style: style,
        })
    
    }
    render() {
 
        return (
            <React.Fragment>
                <div style={this.state.style}
                 onMouseOver={() => this.hoover()}
                 onMouseOut={() => this.hooverOut()}
                 ></div>
            </React.Fragment>
        );
    }
}

export default Square;

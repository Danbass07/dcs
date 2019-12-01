import React, { Component } from "react";
import ReactDOM from "react-dom";
import Radium from "radium";

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
                backgroundColor: "black",
                border: "0px solid white ",
                width: "15px",
                height: "15px",
                cursor: "url(/images/one.png), pointer",
                backgroundSize: "cover",
                borderRadius: "20%",
          
            }
        };

    hoover() {
        this.setState({
            backgroundColor: '#'+Math.floor((this.props.number)*16777215).toString(16),
        })
    
    }
    hooverOut() {
  
        this.setState({
            backgroundColor: '#'+Math.floor((this.props.number-this.props.index*0.0000016)*16777215).toString(16),
        })
    
    }
    render() {

        return (
            <React.Fragment>
                <div style={this.state}
                 onMouseOver={() => this.hoover()}
                 onTouchStart={() => this.hoover()}
                 onTouchMove={() => this.hoover()}
                 onMouseOut={() => this.hooverOut()}
                 onTouchEnd={() => this.hooverOut()}
                 ></div>
            </React.Fragment>
        );
    }
}

export default Radium(Square);

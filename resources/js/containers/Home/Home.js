import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Friend from "./Friend";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsNames: [
                { name: "GitHub"},
                { name: "Laravel"},
                { name: "React"},
                { name: "Php"},
                { name: "JavaScript"},
                { name: "MySql"},
                { name: "Udemy"},
                { name: "Treehouse"},
                { name: "Google"},
                { name: "CSS"},
                { name: "HTML"},
          
            ]
                
        };
    }
    render() {
        const Wrapper = styled.div`
            height: 100vh;
            width: 100%;
            background-color: #08071c;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

        `;
        const Welcome = styled.div`
        height: auto;
        width: 220px;
        background-color: #242249;
        color: white;
        font-size: 20px;
        order: 5;
        `
        return (
            <Wrapper>
                <Welcome>WELCOME PLEASE MEET MY FRIENDS</Welcome>
                {this.state.friendsNames.map((friend, index) => {
                    return <Friend key={index} order={index} friend={friend} />;
                })}
            </Wrapper>
        );
    }
}

export default Home;

if (document.getElementById("Home")) {
    ReactDOM.render(<Home />, document.getElementById("Home"));
}

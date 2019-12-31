import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Friend from "./Friend";
import Slider from "./Slider"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            animation: false,
            popup: {
                active: false,
                index: 0
            },
            friends: [
                {
                    name: "GitHub",
                    description:
                        "Lets me working with different machines on same code," +
                        " keep my code safe," +
                        " uploadnig changes to the server is easy as one line."
                },
                {
                    name: "Laravel",
                    description:
                        "Amazing framework, its my fundament, all heavy lifting done" +
                        " security, routing, email, querrys " +
                        " I can start any project quickly with all important up to date modules ready to go"
                },
                {
                    name: "React",
                    description:
                        "Class and functional components all you need with easy syntax," +
                        " its fast it has state and javascript with no limits," +
                        " I study react over a year now and every day I discover new possibilities."
                },
                {
                    name: "Php",
                    description:
                        "All amazing stuff Laravel do for me is possible thanks to Php," +
                        " I can use it to achievie all I need in a back end with all objects and classes from frmework" +
                        " even with most simple functions I can do almost enything."
                },
                {
                    name: "JavaScript",
                    description:
                        "I study Javascript almost 3 years for me its a main tool for all logic in my apps" +
                        " manipulating data crafting DOM elements " +
                        ""
                },
                {
                    name: "MySql",
                    description:
                        "Lets me working with different machines on same code," +
                        " keep my code safe," +
                        " uploadnig changes to the server is easy as one line."
                },
                {
                    name: "Udemy",
                    description:
                        "When I now what I need to learn I go there" +
                        "Best Courses you can imagine" +
                        " www.udemy.com"
                },
                {
                    name: "Treehouse",
                    description:
                        "My first steps, before I new what I want to learn and sign up there" +
                        " one of my best decisions in life" +
                        " been with them over 2 years and as soon I have more time I'dlove to go back."
                },
                {
                    name: "Google",
                    description:
                        "If you stuck if you really do not know how or where what you do?" +
                        " do google.com" +
                        " all of my friends on this web page been found thanks to Google."
                },
                {
                    name: "CSS",
                    description:
                        "For styling I use SaSS or styled components" +
                        " but all styling and up there and we love it"
                },
                {
                    name: "HTML",
                    description:
                        "What I can say. First Hello World and thats it you are officially in Love" +
                        " I CAN DO STUFF :),"
                }
            ]
        };
    }

    togglePopUp(index) {
        if (!this.state.clicked) {
            this.setState({
                animation: !this.state.animation,
                clicked: true
            });

            setTimeout(
                function() {
                    this.setState({
                        popup: {
                            active: !this.state.popup.active,
                            index: index
                        },
                        clicked: false
                    });
                }.bind(this),
                3000
            );
        }
    }
    changeSlide(value) {
        console.log(this.state.friends.length-1)
        if (!this.state.clicked) {
            if (value <= 0) {
                this.setState({
                    ...this.state,
                    popup: {
                        active: true,
                        index: this.state.friends.length-1,
                    },
                    clicked: true
                    
                });
            } else if (value >= this.state.friends.length-1) {
                this.setState({
                    ...this.state,
                    popup: {
                        active: true,
                        index: 0,
                    },
                    clicked: true
                })
            } else {
                this.setState({
                    ...this.state,
                    popup: {
                        active: true,
                        index: value
                    },
                    clicked: true
                });
            }
            setTimeout(
                function() {
                    this.setState({
                        animation: false,
                        clicked: false
                    });
                }.bind(this),
                4000
            );
        }
    
        
    }
    componentDidMount() {
        // fetch('https://portfoilio-a38ec.firebaseio.com/users.json', {
        //     method: 'POST',
        //     body:JSON.stringify(this.state),
        //     headers: {'Content-Type': 'application/json'}
        // });
    }
    render() {
        const Wrapper = styled.div`
            height: 100vh;
            width: 100%;
            background-color: #08071c;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            flex-direction: ${
                !this.state.popup.active ? "row" : "column-reverse"
            }
            justify-content: space-around;
        `;

        const Welcome = styled.div`
            height: auto;
            width: 220px;
            background-color: #242249;
            color: white;
            font-size: 20px;
            order: 5;
        `;

        const PopUp = styled.div`
            height: 20%;
            color: white;
            background-color: #242249;
            align-content: center;
            font-size: 26px;
        `;

        return (
            <Wrapper>
                {this.state.popup.active ? (
                    <PopUp>
                        <div style={{ margin: "auto auto" }}>
                            {
                                this.state.friends[this.state.popup.index]
                                    .description
                            }
                        </div>
                    </PopUp>
                ) : (
                    <Welcome>
                        Welcome in my enviroment. Hover or Touch my Friends Logo
                        to find out what I do or did thanks to them.
                    </Welcome>
                )}

                {!this.state.popup.active ? (
                    this.state.friends.map((friend, index) => {
                        return (
                            <Friend
                                height={"25%"}
                                width={"25%"}
                                key={index}
                                order={index}
                                friend={friend}
                                togglePopUp={() => this.togglePopUp(index)}
                                animation={this.state.animation}
                            />
                        );
                    })
                ) : (
                    <React.Fragment>
                        <Slider
                             friend={this.state.friends[this.state.popup.index]}
                             togglePopUp={() => this.togglePopUp(0)}
                             animation={!this.state.animation}   
                             changeSlide={ (value) => this.changeSlide(value)}  
                             index={this.state.popup.index}    
                                      
                        />
                        {/* <button
                            onClick={() => {
                                this.changeSlide(this.state.popup.index + 1);
                            }}
                        >
                            LEFT
                        </button>
                        <Friend
                            height={"500px"}
                            width={"70%"}
                            order={1}
                            friend={this.state.friends[this.state.popup.index]}
                            togglePopUp={() => this.togglePopUp(0)}
                            animation={!this.state.animation}
                        />
                        <button
                          onClick={() => {
                            this.changeSlide(this.state.popup.index -1);
                        }}
                   >Right</button> */}
                    </React.Fragment>
                )}
            </Wrapper>
        );
    }
}

export default Home;

if (document.getElementById("Home")) {
    ReactDOM.render(<Home />, document.getElementById("Home"));
}

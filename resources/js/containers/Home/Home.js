import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Friend from "./Friend";
import Slider from "./Slider";
import Message from "./Message";


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
                    link: "github.com",
                    description:
                        "Lets me working with different machines on same code." +
                        " Keep my code safe," +
                        " uploadnig changes to the server as easy as one line."
                },
                {
                    name: "Laravel",
                    link: "laravel.com",
                    description:
                        "Amazing framework, its my fundament, all heavy lifting done: " +
                        " security, routing, email, querrys." +
                        " I can start any project quickly with all important up to date modules ready to go."
                },
                {
                    name: "React",
                    link: "reactjs.org",
                    description:
                        "Class and functional components all you need with easy syntax," +
                        " its fast it has state and I can use javascript with no limits," +
                        " I study react over a year now and every day I discover new possibilities."
                },
                {
                    name: "Php",
                    link: "php.net",
                    description:
                        "All amazing stuff Laravel do for me is possible thanks to Php," +
                        " I can use it to achievie all I need in a backend with all objects and classes from frmework." +
                        "Even with simplest functions I can do almost enything."
                },
                {
                    name: "JavaScript",
                    link: "javascript.com",
                    description:
                        "I study Javascript almost 3 years. For me its a main tool for all logic in my apps, " +
                        "manipulating data crafting DOM elements." +
                        ""
                },
                {
                    name: "MySql",
                    link: "mysql.com",
                    description:
                        "MySQL is the world's most popular open source database." +
                        "Very powerful and fast. Thanks to Eloquent safe and easy to use." +
                        ""
                },
                {
                    name: "Udemy",
                    link: "udemy.com",
                    description:
                        "When I now what I need to learn I go there." +
                        "Best courses you can imagine." +
                        " "
                },
                {
                    name: "Treehouse",
                    link: "teamtreehouse.com",
                    description:
                        "My first steps, before I new what I want to learn and sign up there" +
                        " one of my best decisions in life" +
                        " been with them over 2 years and as soon I have more time I'dlove to go back."
                },
                {
                    name: "Google",
                    link: "google.com",
                    description:
                        "If you stuck if you really do not know how or where what you do?" +
                        " Do GOOGLe !" +
                        " All of my friends on this web page been found thanks to Google."
                },
                {
                    name: "CSS",
                    link: "developer.mozilla.org/en-US/docs/Web/CSS",
                    description:
                        "For styling I use SaSS or styled components" +
                        " but all styling and up there and we love it."
                },
                {
                    name: "HTML",
                    link: "html.com",
                    description:
                        "What I can say. First Hello World and thats it you are officially in Love" +
                        " I CAN DO STUFF :) "
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
        if (!this.state.clicked) {
            if (value <= 0) {
                this.setState({
                    popup: {
                        active: true,
                        index: this.state.friends.length-1,
                    },
                 
                    
                });
            } else if (value >= this.state.friends.length-1) {
                this.setState({
                    popup: {
                        active: true,
                        index: 0,
                    },
                })
            } else {
                this.setState({
                    popup: {
                        active: true,
                        index: value
                    },
                });
            }
           
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
            height: 95vh;
            width: 100%;
            background-color: #08071c;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            flex-direction: ${
                !this.state.popup.active ? "row" : "column-reverse"
            }
            justify-content: space-around;
            padding-bottom: 60px;
        `;

        const Welcome = styled.div`
            height: auto;
            width: 220px;
            background-color: rgb(8, 7, 28, 0);
            color: white;
            font-size: 20px;
            order: 5;
            position: absolute;
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
                            {"     "}
                            <a href={"https://"+ this.state.friends[this.state.popup.index]
                                    .link+""}>Visit {this.state.friends[this.state.popup.index]
                                    .name} website</a>
                        </div>
                    </PopUp>
                ) : (
                    <Message/>
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

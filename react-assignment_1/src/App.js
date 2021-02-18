import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserIn from "./UserInput/UserInput";
import UserOut from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "Rahul",
  };

  userNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <UserIn changed={this.userNameHandler} userName={this.state.userName} />
        <UserOut userName={this.state.userName} dev="React" />
        <UserOut userName={this.state.userName} dev="NodeJs" />
        <UserOut userName={this.state.userName} dev="Python" />
      </div>
    );
  }
}

export default App;

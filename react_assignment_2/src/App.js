import react, { Component } from "react";
import "./App.css";
import Validation from "./ValidationComponent/ValidationComponent";
import CharComp from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputUser: "",
  };

  inputChangeHandler = (event) => {
    this.setState({
      inputUser: event.target.value,
    });
  };

  deleteCharHandler = (index) => {
    const text = [...this.state.inputUser.split("")];
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ inputUser: updatedText });
  };

  render() {
    const charList = this.state.inputUser.split("").map((ch, index) => {
      return (
        <CharComp
          charactor={ch}
          key={index}
          click={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.inputUser}
        />
        <p>{this.state.inputUser}</p>
        <Validation inputLength={this.state.inputUser.length} />
        {charList}
      </div>
    );
  }
}

export default App;


import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "Darlan",
    counter: 0,
  };

  handleChangeNameEndCounterClick = () => {
    const { counter, name } = this.state;

    name === "Darlan"
      ? this.setState({ name: "Junior", counter: counter + 1 })
      : this.setState({ counter: counter + 1 });
  };

  handleRClick = () => {
    this.setState({ counter: 0, name: "Darlan" });
  };

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <p className="nomeVariavel">
          {name} {counter}
        </p>
        <button
          className="bt-click"
          onClick={this.handleChangeNameEndCounterClick}
        >
          CLICK
        </button>
        <button className="bt-reset" onClick={this.handleRClick}>
          RESET
        </button>
      </div>
    );
  }
}

export default App;

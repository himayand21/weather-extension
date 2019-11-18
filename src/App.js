import React, { Component } from "react";
import "./App.css";
import Weather from "./weather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;

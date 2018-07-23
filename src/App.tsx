import React from "react";
import "./App.css";

import logo from "./logo.svg";

import { TestButton } from "@components/defaultProps";

class App extends React.Component {

  public test = aa => {
    console.log("aa", aa);
  };

  public render() {

    return (
      <div className="App">
        <TestButton />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

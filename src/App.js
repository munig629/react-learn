import React, { Component } from "react";

import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button
          onClick={(e) => {
            console.log("Button Click");
          }}
        >
          OK
        </button>
      </div>
    );
  }
}

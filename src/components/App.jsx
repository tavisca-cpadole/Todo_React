import React, { Component } from "react";
import Content from "./Content";
import NavBar from "./NavBar";

class App extends Component {
  state = {};
  render() {
    return (
      <div id="main">
        <Content />
        <NavBar />
      </div>
    );
  }
}

export default App;

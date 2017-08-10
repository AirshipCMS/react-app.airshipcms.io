import React, { Component } from "react";
import Nav from "../Nav";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

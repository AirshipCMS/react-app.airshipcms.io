import React, { Component } from 'react';
import logo from './assets/airship-react.svg';
import './App.css';

class Styling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page : null
    };
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="Styling">
        <h1>Styling</h1>
      </div>
    );
  }
}

export default Styling;

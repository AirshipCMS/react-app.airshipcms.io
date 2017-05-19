import React, { Component } from 'react';
import logo from './assets/airship-react.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page : null
    };
  }
  componentDidMount() {
    fetch("/api/pages/__root__")
      .then( res => res.json() )
      .then( page => { this.setState({page}) } );
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2>{ (this.state.page !== null) ? this.state.page.fields[0].value : "" }</h2>
      </div>
    );
  }
}

export default App;

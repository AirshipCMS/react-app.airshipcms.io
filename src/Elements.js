import React, { Component } from 'react';
import logo from './assets/airship-react.svg';
import './App.css';

class Elements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page : null
    };
  }
  componentDidMount() {
    fetch("/api/pages/__root__")
      .then( res => res.json() )
      .then( page => {
        page.fields.map((field) =>{
          switch(field.variable_name) {
            default:
              page[field.variable_name] = field.value;
              break;
          }
        });
        this.setState({ page });
      });
  }
  render() {
    return (
      <div className="Elements">
        <h1>Elements</h1>
      </div>
    );
  }
}

export default Elements;

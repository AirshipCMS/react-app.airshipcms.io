import React, { Component } from "react";
import logo from "./assets/airship-react.svg";
import "./App.css";

class AirshipSchema extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null
    };
  }
  componentDidMount() {
    fetch("/api/pages/airship-schema").then(res => res.json()).then(page => {
      page.fields.map(field => {
        return (page[field.variable_name] = field.value);
      });
      this.setState({ page });
    });
  }
  render() {
    return (
      <div
        className="AirshipSchema body"
        dangerouslySetInnerHTML={{
          __html: this.state.page !== null ? this.state.page.body : ""
        }}
      />
    );
  }
}

export default AirshipSchema;

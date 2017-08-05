import React, { Component } from "react";
import "./App.css";

class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null
    };
  }
  componentDidMount() {
    fetch("/api/pages/__root__").then(res => res.json()).then(page => {
      page.fields.map(field => {
        return (page[field.variable_name] = field.value);
      });
      this.setState({ page });
    });
  }
  render() {
    const currentPath = window.location.pathname;
    return currentPath === "/"
      ? <div className="Setup">
          <div className="summary">
            <img src="/assets/media/react-airship.svg" />
            <h1 className="title is-4">
              {this.state.page !== null ? this.state.page.name : ""}
            </h1>
            <p>
              {this.state.page !== null ? this.state.page.description : ""}
            </p>
          </div>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html: this.state.page !== null ? this.state.page.body : ""
            }}
          />
        </div>
      : null;
  }
}

export default Setup;

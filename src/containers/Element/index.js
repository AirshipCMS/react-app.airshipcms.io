import React, { Component } from "react";

class Element extends Component {
  constructor(props) {
    super(props);

    this.state = {
      element: {
        sorting_position: 0,
        name: "",
        image: []
      }
    };
  }

  componentDidMount() {
    fetch("/api/aerostats/" + this.props.match.params.id)
      .then(res => res.json())
      .then(element => {
        return element.fields.map(
          field => (element[field.variable_name] = field.value)
        ), this.setState({ element });
      });
  }

  render() {
    return (
      <div className="element columns">
        <div className="coulmn is-one-quarter">
          <figure className="image element-detail-image">
            <img
              src={this.state.element.image[0].url}
              alt={this.state.element.image[0].file_name}
            />
          </figure>
        </div>
        <div className="element-details content column auto">
          <h1>
            {this.state.element.name}
          </h1>
          <h4>
            #{this.state.element.sorting_position}
          </h4>
          <p>
            {this.state.element.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Element;

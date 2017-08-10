import React, { Component } from "react";
import { Link } from "react-router-dom";
import Github from "../../components/Github";
import NavToggle from "../../components/NavToggle";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false
    };
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    return (
      <nav className="nav">
        <div className="container">
          <Link className="nav-title title is-tab" to="/">
            React + Airship CMS
          </Link>
          <div
            className={
              this.state.navOpen
                ? "nav-right nav-menu is-active"
                : "nav-right nav-menu"
            }
            id="nav-menu"
          >
            <Link className="nav-item" to="/">
              Setup
            </Link>
            <Link className="nav-item" to="/styling">
              Styling
            </Link>
            <Link className="nav-item active" to="/airship-schema">
              Airship Schema
            </Link>
            <Link className="nav-item" to="/react-tutorial">
              React Tutorial
            </Link>
            <Link className="nav-item" to="/elements">
              Elements
            </Link>
          </div>
          <Github />
          <NavToggle
            className={
              this.state.navOpen ? "is-active nav-toggle" : "nav-toggle"
            }
            toggleNav={this.toggleNav.bind(this)}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;

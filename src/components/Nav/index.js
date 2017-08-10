import React, { Component } from "react";
import { Link } from "react-router-dom";
import Github from "../Github";
import NavToggle from "../NavToggle";

export default function Nav(props) {
  return (
    <nav className="nav">
      <div className="container">
        <Link className="nav-title title is-tab" to="/">
          React + Airship CMS
        </Link>
        <div className="nav-right nav-menu" id="nav-menu">
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
        <NavToggle />
      </div>
    </nav>
  );
}

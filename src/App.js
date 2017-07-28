import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page : null
    };
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div className="container">
            <Link className="nav-title title is-tab" to='/'>React + Airship CMS</Link>
            <div className="nav-right nav-menu" id="nav-menu">
              <Link className="nav-item" to='/'>Setup</Link>
              <Link className="nav-item" to='/styling'>Styling</Link>
              <Link className="nav-item active" to='/airship-schema'>Airship Schema</Link>
              <Link className="nav-item" to='/react-tutorial'>React Tutorial</Link>
              <Link className="nav-item" to='/elements'>Elements</Link>
            </div>
            <a className="nav-item is-tab github" href="https://github.com/AirshipCMS/react-app.airshipcms.io"><img src="/assets/media/github-icon.svg"/></a>
            <span className="nav-toggle" id="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </nav>
        <div className="container content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;

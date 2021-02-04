import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav>
        <ul className="navbar_container">
          <li>
            <button onClick={() => this.props.changeCategory("All")} className="all">
              All
            </button>
          </li>
          <li>
            <button onClick={() => this.props.changeCategory("Web")} className="navbar_item web">
              Web
            </button>
          </li>
          <li>
            <button
              onClick={() => this.props.changeCategory("Graphisme")}
              className="navbar_item graphisme"
            >
              Graphisme
            </button>
          </li>
          <li>
            <button
              onClick={() => this.props.changeCategory("Développement")}
              className="navbar_item developpement"
            >
              Développement
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

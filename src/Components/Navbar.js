import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FaBeer } from "react-icons/fa";
import Logo from "../images/logo.svg";

export default class Navbar extends Component {
  state = {
    toggler: false,
  };

  handleToggle = () => {
    this.setState({ toggler: !this.state.toggler });
    console.log(this.state.toggler);
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>

            <span className="nav-btn" onClick={this.handleToggle}>
              <i className="fas fa-bars nav-icon"></i>
            </span>
          </div>
          <ul
            className={this.state.toggler ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

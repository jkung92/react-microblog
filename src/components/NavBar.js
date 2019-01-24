import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="jumbotron bg-light jumbotron-fluid ">
        <div className="container ">
          <NavLink exact to="/">
            <h1 className="display-4"> Microblog </h1>
            <p className="lead"> Get in the Rithm of blogging!</p>
          </NavLink>
        </div>
        <nav className="nav ">
          <NavLink exact to="/" className="nav-link">
            <span> Blog </span>
          </NavLink>
          <NavLink exact to="/new" className="nav-link">
            <span> Add a new post </span>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;

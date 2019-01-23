import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="block">
          <NavLink exact to="/">
            <h1> Microblog </h1>
            <p> Get in the Rithm of blogging!</p>
          </NavLink>
        </div>
        <nav className="nav justify-content-center">
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

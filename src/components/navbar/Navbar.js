import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="title-name">
          <h1>Minh Chính</h1>
        </div>
        <div className="menu">
          <NavLink activeClassName="show" to="/home"><i className="fa fa-home" />Home</NavLink>
          <NavLink activeClassName="show" to="/about"><i className="fa fa-user-circle-o" />About</NavLink>
          <NavLink activeClassName="show" to="/experience"><i className="fa fa fa-bookmark" />Experience</NavLink>
          <NavLink activeClassName="show" to="/skills"><i className="fa fa-asterisk" />Skills</NavLink>
          <NavLink activeClassName="show" to="/projects"><i className="fa fa-graduation-cap" />Projects</NavLink>
          <NavLink activeClassName="show" to="/interest"><i className="fa fa-star" />Interest</NavLink>
          <NavLink activeClassName="show" to="/end"><i className="fa fa-play" />The end</NavLink>
        </div>
      </div>
    )
  }
}

export default Navbar

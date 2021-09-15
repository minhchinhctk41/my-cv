import React, { Component } from 'react'

import './about.scss'

import Man from 'assets/man.png'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="header">
          header
        </div>
        <div className="content">
          <div className="man">
            <img src={Man} alt="man"/>
            <span>About me</span>
          </div>
          <div className="about-me">
            <div className="content-about">
              <p>I am Minh Chinh, Front-end Intern from Da Lat, Vietnam.</p>
              <p><i className="fa fa-ge"></i></p>
            </div>
          </div>
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    )
  }
}

export default About

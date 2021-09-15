import React, { Component } from 'react'

import './home.scss'

import Boy from 'assets/boy.png'

// const sdt = () => {
//   alert('SDT : 0123456789')
// }

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <img src={Boy} alt="logo" />
          <h2>Đỗ Minh Chính</h2>
          <span>I`m Web Intern</span>
          <p>05 / 02 / 1999</p>
          <p>SDT : 0385 079 152</p>
          <p>Email : minhchinh04@gmail.com</p>
          <div className="contact">
            <a target="_blank" href="https://github.com/minhchinhctk41" rel="noreferrer">
              <i className="fa fa-github-square"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/chinh.minh.315213/" rel="noreferrer">
              <i className="fa fa-facebook-square"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../components/home/Home'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Interest from '../components/interest/Interest'
import End from '../components/end/End'

import './navigation.scss'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/interest" component={Interest} />
        <Route exact path="/end" component={End} />
      </div>
    )
  }
}

export default Navigation

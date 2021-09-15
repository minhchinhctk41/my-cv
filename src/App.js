
import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Navigation from './router/Navigation'

import './scss/App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Navigation />
      </div>
    </Router>
  )
}

export default App

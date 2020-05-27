import React, { Component } from 'react'

import './app.css'
import * as logo from './logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>welcome to react-static starter kit</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            Learn{' '}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{' '}
            and{' '}
            <a
              className="App-link"
              href="https://react-static.js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Static
            </a>
          </span>
        </header>
      </div>
    )
  }
}

export default App

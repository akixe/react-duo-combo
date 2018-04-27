import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      subsystems: [],
      subsubsystems: []
    }
  }

  componentWillMount() {
    fetch('https://api.myjson.com/bins/n9g2b')
      .then((response) => {
        return response.json()
      })
      .then((subsystems) => {
        this.setState({subsystems})
      })
    
    fetch('https://api.myjson.com/bins/vnnoz')
      .then((response) => {
        return response.json()
      })
      .then((subsubsystems) => {
        this.setState({subsubsystems})
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <select>
          {this.state.subsystems.map((subsystem) => {
            return (
              <option>{subsystem.publicName}</option>
            )
          })}
        </select>
        <hr />
        <div>
          {this.state.subsubsystems.map((subsubsystem) => {
            return (
              <p>{subsubsystem.description}</p>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;

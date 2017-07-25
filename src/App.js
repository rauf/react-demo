import React, { Component } from 'react';
import './App.css';
import Clock from './clock/Clock';
import List from './lists/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Clock (Click to toggle) </h3> <Clock/>
        <br/>
        <h3>List: </h3> <List/>
        <br/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Clock from './clock/Clock';
import List from './lists/List';
import Form from './form/Form'
import Calculator from './converter/Calculator';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h3>Clock (Click to toggle) </h3> <Clock/>
        <br/>
        <h3>List: </h3> <List/>
        <br/>
        <h3>Form: </h3> <Form/>
        <br/>
        <h3>Temperature Converter </h3> <Calculator/>
        <br/>
      </div>
    );
  }
}

export default App;

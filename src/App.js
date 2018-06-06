import React, { Component } from 'react';
import Todo from './Todo'
import Modal from './Modal'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo/>
        <Modal/>
      </div>
    );
  }
}

export default App;

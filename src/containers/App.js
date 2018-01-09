import React, { Component } from 'react';
import Signup from './Signup.js';
import Login from './Login.js';


class App extends Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Navigation from './Navigation';
import Messages from './Messages';

export default class MyAccount extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Messages />
      </div>
    );
  }
}

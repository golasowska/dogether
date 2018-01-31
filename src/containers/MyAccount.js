import React from 'react';
import Navigation from './Navigation';
import Messages from './Messages';
import MyArticles from './MyArticles';

export default class MyAccount extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div>
            <h3 className="alert alert-light"> Messages:</h3>
            <Messages />
          </div>
          <div>
            <h3 className="alert alert-light"> My articles:</h3>
            <MyArticles />
          </div>
        </div>
      </div>
    );
  }
}

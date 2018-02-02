import React from 'react';
import Navigation from './Navigation';
import Messages from './Messages';
import MyArticles from './MyArticles';
import Footer from './Footer';

export default class MyAccount extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div>
            <h4 className="alert alert-light mt-3 mb-5 text-dark text-center text-uppercase">
              {' '}
              Messages:
            </h4>
            <Messages />
          </div>
          <div>
            <h4 className="alert alert-light text-dark text-center text-uppercase mb-5 mt-3">
              {' '}
              My articles:
            </h4>
            <MyArticles />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

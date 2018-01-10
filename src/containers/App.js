import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom';
import { history } from '../store/configureStore';
import { connect } from 'react-redux';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const PrivateRoute = ({ component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) => authenticated === true
        ? <Component {...props} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}} /> }
      />
  );
};

const PublicRoute = ({ component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) => authenticated ===false
      ? <Component {...props} />
      : <Redirect to='/home' />}
    />
  );
};


class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={ history } >
        <div className='container'>
          <PublicRoute authenticated={ this.props.authenticated } exact path='/' component= { Login } />
          <PublicRoute authenticated={ this.props.authenticated } path='/signup' component= { Signup } />
          <PrivateRoute authenticated={ this.props.authenticated } path='/home' component = {  Home } />
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('auth', state.auth.authenticated);
  return { authenticated: state.auth.authenticated};
};

export default connect(mapStateToProps)(App);

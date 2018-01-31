import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';

class Navigation extends React.Component {
  handleSignout() {
    this.props.signOutUser();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand text-danger">
            dogether
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item" key={1}>
                <Link className="nav-link active text-danger" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item" key={2}>
                <Link className="nav-link text-danger" to="/dogfriendly">
                  Dog friendly
                </Link>
              </li>
              <li className="nav-item" key={3}>
                <Link className="nav-link text-danger" to="/vet">
                  Vet
                </Link>
              </li>
              <li className="nav-item" key={4}>
                <Link className="nav-link text-danger" to="/adoption">
                  Adoption
                </Link>
              </li>
              <li className="nav-item" key={5}>
                <Link className="nav-link text-danger" to="/myaccount">
                  My Account
                </Link>
              </li>
              <li className="nav-item" key={6}>
                <a
                  id="signout"
                  className="nav-link text-danger"
                  onClick={() => this.handleSignout()}
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null, Actions)(Navigation);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';

class Navigation extends React.Component{
  handleSignout() {
    this.props.signOutUser();
  }


  render() {
    return(
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/home' className='navbar-brand'>dogether</Link>
          </div>

          <ul id='navig' className='nav navbar-nav navbar-right'>
            <li className='nav-item' key={1}>
              <Link className='nav-link active' to='/gallery'>Gallery</Link>
            </li>
            <li className='nav-item' key={2}>
              <Link className='nav-link' to='/dogfriendly'>Dog friendly</Link>
            </li>
            <li className='nav-item' key={3}>
              <Link className='nav-link' to='/vet'>Vet</Link>
            </li>
            <li className='nav-item' key={4}>
              <Link className='nav-link' to='/adoption'>Adoption</Link>
            </li>
            <li className='nav-item' key={5}>
              <a id='signout' className='nav-link' onClick={() => this.handleSignout()}>Sign out</a>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}

export default connect(null, Actions)(Navigation);

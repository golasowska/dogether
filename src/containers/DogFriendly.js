import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

class DogFriendly extends React.Component{
  render(){
    return (
        <div>
          <Navigation />
          <Link className='btn btn-info btn-lg btn-block mt-4 mb-4' to='/adddogfriendly'>Add a place</Link>

        </div>
    )
  }
}

export default DogFriendly;

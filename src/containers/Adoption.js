import React from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';

class Adoption extends React.Component{
  render(){
    return (
        <div>
          <Navigation />
          <Link className='btn btn-info btn-lg btn-block mt-4 mb-4' to='/addadoption'>Add for adoption</Link>
        </div>
    )
  }
}

export default Adoption;

import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

class Vet extends React.Component{
  render(){
    return (
        <div>
          <Navigation />
          <Link className='btn btn-info' to='/addvet'>Add a vet</Link>
        </div>
    )
  }
}

export default Vet;

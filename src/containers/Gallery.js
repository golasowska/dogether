import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

class Gallery extends React.Component{
  render(){
    return (
        <div>
          <Navigation />
          <Link className='btn btn-info btn-lg btn-block mt-4 mb-4' to='/addgallery'>Add your pet</Link>
        </div>
    )
  }
}

export default Gallery;

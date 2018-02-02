import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import GalleryData from './GalleryData';
import Navigation from './Navigation';
import Footer from './Footer';

class Gallery extends React.Component {
  componentDidMount = () => {
    this.props.displayGallery();
  };

  showGallery = () => {
    if (this.props.gallery) {
      for (const key of Object.keys(this.props.gallery)) {
        this.props.gallery[key].key = key;
      }
    }
    return _.map(this.props.gallery, pet => {
      return <GalleryData key={pet.key} pet={pet} />;
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Link
            className="btn btn-info btn-lg btn-block mt-4 mb-4"
            to="/addgallery"
          >
            Add your pet
          </Link>
          <div className="dog-list">{this.showGallery()}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.displayGallery
  };
}

export default connect(mapStateToProps, Actions)(Gallery);

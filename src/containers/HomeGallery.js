import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import _ from 'lodash';
import HomeGalleryData from './HomeGalleryData';

class HomeGallery extends React.Component {
  componentDidMount = () => {
    this.props.displayGallery();
  };

  renderGallery = () => {
    if (this.props.photos) {
      for (const key of Object.keys(this.props.photos)) {
        this.props.photos[key].key = key;
      }
    }
    return _.map(this.props.photos, pet => {
      return (
        <div>
          <HomeGalleryData key={pet.key} pet={pet} />
        </div>
      );
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 850, settings: { slidesToShow: 1 } },
        { breakpoint: 430, settings: { variableWidth: false, slidesToShow: 1 } }
      ]
    };
    return <Slider {...settings}>{this.renderGallery()}</Slider>;
  }
}

function mapStateToProps(state) {
  return {
    photos: state.displayGallery
  };
}

export default connect(mapStateToProps, Actions)(HomeGallery);

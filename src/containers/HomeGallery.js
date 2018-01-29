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
      return <HomeGalleryData key={pet.key} pet={pet} />;
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      variableWidth: true,
      centerMode: true
      // responsive: [
      //   { breakpoint: 768, settings: { slidesToShow: 3 } },
      //   { breakpoint: 1024, settings: { slidesToShow: 5 } },
      //   { breakpoint: 100000, settings: 'unslick' }
      // ]
    };
    return (
      <div>
        <Slider {...settings}>{this.renderGallery()}</Slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.displayGallery
  };
}

export default connect(mapStateToProps, Actions)(HomeGallery);

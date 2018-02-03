import React from 'react';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

import VetData from './VetData';
import GoogleMap from './GoogleMap';
import Navigation from './Navigation';
import Footer from './Footer';

class Vet extends React.Component {
  componentDidMount = () => {
    this.props.displayVets();
  };

  vetLocation = address => {
    this.props.vetLocation(address);
  };

  showVet = () => {
    if (this.props.vets) {
      for (const key of Object.keys(this.props.vets)) {
        this.props.vets[key].key = key;
      }
    }
    return _.map(this.props.vets, vet => {
      return <VetData key={vet.key} vet={vet} vetLocation={this.vetLocation} />;
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Link
            className="btn btn-info btn-lg btn-block mt-4 mb-4"
            to="/addvet"
          >
            Add a vet
          </Link>
          <div className="text-center">{this.showVet()}</div>
          <div className="justify-content-center map-parent mx-auto mt-5 mb-5">
            <GoogleMap vetLoc={this.props.vetLoc} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vets: state.displayVets,
    vetLoc: state.vetLocation
  };
}

export default connect(mapStateToProps, Actions)(Vet);

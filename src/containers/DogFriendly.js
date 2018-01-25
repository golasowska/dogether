import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

import DogFriendlyData from './DogFriendlyData';
import SearchBar from './SearchBar';

class DogFriendly extends React.Component {
  componentDidMount = () => {
    this.props.displayDogFriendly();
  };

  showAllData = () => {
    this.props.displayDogFriendly();
  };

  showDogFriendly = () => {
    if (this.props.dogFriendly) {
      for (const key of Object.keys(this.props.dogFriendly)) {
        this.props.dogFriendly[key].key = key;
      }
    }
    return _.map(this.props.dogFriendly, dogFriendly => {
      return (
        <DogFriendlyData key={dogFriendly.key} dogFriendly={dogFriendly} />
      );
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <Link
          className="btn btn-info btn-lg btn-block mt-4 mb-4"
          to="/adddogfriendly"
        >
          Add a place
        </Link>
        <SearchBar />
        <button
          className="btn btn-info btn-lg btn-block mt-4 mb-4"
          onClick={this.showAllData}
        >
          Show all places
        </button>
        <div className="text-center">{this.showDogFriendly()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('dog friendlyyy', state.displayDogFriendly);
  return {
    dogFriendly: state.displayDogFriendly
  };
}

export default connect(mapStateToProps, Actions)(DogFriendly);

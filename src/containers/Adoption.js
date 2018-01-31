import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import _ from 'lodash';

import Navigation from './Navigation';
import AdoptionData from './AdoptionData';
import DogModal from './DogModal';

class Adoption extends React.Component {
  componentDidMount = () => {
    this.props.displayAdoption();
  };

  onDogSelect = dog => {
    this.props.openModal(dog);
  };

  closeModal = () => {
    this.props.closeModal();
  };

  showAdoption = () => {
    if (this.props.adoption) {
      for (const key of Object.keys(this.props.adoption)) {
        this.props.adoption[key].key = key;
      }
    }
    return _.map(this.props.adoption, dog => {
      return (
        <AdoptionData key={dog.key} dog={dog} onDogSelect={this.onDogSelect} />
      );
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Link
            className="btn btn-info btn-lg btn-block mt-4 mb-4"
            to="/addadoption"
          >
            Add for adoption
          </Link>
          <DogModal
            modalIsOpen={this.props.modalIsOpen}
            selectedDog={this.props.selectedDog}
            onRequestClose={this.closeModal}
          />
          <div className="dog-list">{this.showAdoption()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('stejt adoption', state.displayAdoption);
  return {
    adoption: state.displayAdoption,
    modalIsOpen: state.modal.modalIsOpen,
    selectedDog: state.modal.selectedDog
  };
}

export default connect(mapStateToProps, Actions)(Adoption);

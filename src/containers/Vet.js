import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

import VetData from './VetData';


class Vet extends React.Component{

  componentDidMount=()=>{
    this.props.displayVets();
  }

  showVet=()=> {
    if (this.props.vets) {
      for(const key of Object.keys(this.props.vets)){
        this.props.vets[key].key=(key);
      }
    }
    return _.map(this.props.vets, vet => {
      return <VetData key={vet.key} vet={vet} />
    })
  }

  render(){
    return (
        <div>
          <Navigation />
          <Link className='btn btn-primary btn-lg btn-block mt-4 mb-4' to='/addvet'>Add a vet</Link>
          <div className='text-center'>
            {this.showVet()}
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('vetsy', state.vets);
  return {
    vets: state.displayVets
  }
}

export default connect (mapStateToProps, Actions) (Vet);

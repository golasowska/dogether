import React from 'react';
import {Link} from 'react-router-dom';
import { connect} from 'react-redux';
import * as Actions from '../actions';
import _ from 'lodash';

import Navigation from './Navigation';
import AdoptionData from './AdoptionData';


class Adoption extends React.Component{

  componentDidMount=()=> {
    this.props.displayAdoption();
  }

  showAdoption=()=>{
    if(this.props.adoption) {
      for(const key of Object.keys(this.props.adoption)){
        this.props.adoption[key].key=(key);
      }
    }
    return _.map(this.props.adoption, dog => {
      return <AdoptionData key={dog.key} dog={dog} />
    })
  }



  render(){
    return (
        <div>
          <Navigation />
          <Link className='btn btn-info btn-lg btn-block mt-4 mb-4' to='/addadoption'>Add for adoption</Link>
          <div>
            {this.showAdoption()}
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('stejt adoption', state.displayAdoption);
  return {
    adoption: state.displayAdoption
  }
}

export default connect(mapStateToProps, Actions)(Adoption);

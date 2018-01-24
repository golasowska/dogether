import React from 'react';
import PreviewPicture from './PreviewPicture';
import * as Actions from '../actions';
import {connect} from 'react-redux';


class AdoptionData extends React.Component{

  handleReserve=()=> {
    const key = this.props.dog.key;
    const data = 'reserved';
    const dog = this.props.dog
    this.props.reserveData(data, key);
    this.props.onDogSelect(dog);
  }

  render(){
    const { name, breed, picture, adoption} = this.props.dog
    return (<div className='col col-md-5 d-inline-block'>
             <div className='card-gallery card bg-light mb-3 text-center'>
              <h4 className='card-header card-title'>{name}</h4>
              <div className='card-body photo-gallery text-center'>
                <PreviewPicture pictureUrl={picture} />
              </div>
              <p className='card-title'>{breed}</p>
              <button className='btn btn-primary' onClick={this.handleReserve}>{adoption}</button>
             </div>
          </div>)
  }
}




export default connect(null, Actions) (AdoptionData);

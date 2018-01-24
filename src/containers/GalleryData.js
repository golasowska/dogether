import React from 'react';
import PreviewPicture from '../containers/PreviewPicture';
import * as Actions from '../actions';
import {connect} from 'react-redux';

class GalleryData extends React.Component{

  handleClick=()=> {
    let votes = this.props.pet.votes;
    const key = this.props.pet.key;
    votes++;
    this.props.addVote(votes, key);
  }

  render(){
    const {name, picture, votes} = this.props.pet
    return (
      <div className='col col-md-5 d-inline-block'>
        <div className='card-gallery card bg-light mb-3 text-center'>
          <div className='card-header card-title'>{name}</div>
            <div className='card-body photo-gallery text-center'>
              <PreviewPicture pictureUrl={picture} />
            </div>
            <h4 className='card-title'>{votes}</h4>
            <button type="button" className="btn btn-info bmd-btn-fab mx-auto" onClick={this.handleClick}>
              <i className="material-icons">grade</i>
            </button>
        </div>
      </div>
    )
  }
}

export default connect(null, Actions)(GalleryData);

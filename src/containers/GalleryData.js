import React from 'react';
import PreviewPicture from '../containers/PreviewPicture';
import * as Actions from '../actions';
import { connect } from 'react-redux';

class GalleryData extends React.Component {
  handleClick = () => {
    if (this.props.canVote) {
      let votes = this.props.pet.votes;
      const key = this.props.pet.key;
      votes++;
      this.props.addVote(votes, key);
      this.props.blockVote(false);
      setTimeout(() => {
        this.props.blockVote(true);
      }, 10000);
    }
  };

  render() {
    const { name, picture, votes } = this.props.pet;
    return (
      <div className="d-inline-block text-center">
        <div className="d-inline-block card bg-light mb-3 text-center">
          <h4 className="card-header card-title">{name}</h4>
          <div className="card-body text-center">
            <PreviewPicture pictureUrl={picture} />
          </div>
          <p className="card-title">{votes}</p>
          <button
            type="button"
            className="btn btn-info bmd-btn-fab mx-auto"
            onClick={this.handleClick}
          >
            <i className="material-icons">grade</i>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    canVote: state.blockvote
  };
}

export default connect(mapStateToProps, Actions)(GalleryData);

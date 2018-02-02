import React from 'react';
import PreviewPicture from './PreviewPicture';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class AdoptionData extends React.Component {
  handleReserve = () => {
    // const key = this.props.dog.key;
    // const data = 'reserved';
    const dog = this.props.dog;
    // this.props.reserveData(data, key);
    if (this.props.dog.adoption === 'reserve') {
      this.props.onDogSelect(dog);
    } else {
      swal(' This dog have already been reserved ! ');
    }
  };

  render() {
    const { name, breed, picture, adoption } = this.props.dog;
    const colors = ['info', 'danger', 'warning', 'primary', 'secondary'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div className="d-inline-block text-center">
        <div className="d-inline-block card bg-light mb-3">
          <h4 className={`card-header card-title bg-${randomColor}`}>{name}</h4>
          <div className="card-body d-inline-block">
            <PreviewPicture pictureUrl={picture} />
          </div>
          <p className="card-title">{breed}</p>
          <button className="btn btn-primary" onClick={this.handleReserve}>
            {adoption}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, Actions)(AdoptionData);

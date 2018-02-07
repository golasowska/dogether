import React from 'react';

export default class VetData extends React.Component {
  vetLocation = () => {
    const address =
      this.props.vet.city.toString() +
      ' ' +
      this.props.vet.streetName.toString() +
      ' ' +
      this.props.vet.streetNumber.toString();

    this.props.vetLocation(address);
  };

  render() {
    const { vet, city, streetName, streetNumber, phone, www } = this.props.vet;
    const colors = ['info', 'danger', 'warning', 'primary', 'secondary'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div className="col col-md-5 d-inline-block">
        <div className="card-scroll card bg-light mb-3 text-left">
          <div className={`card-header card-title bg-${randomColor}`}>
            {vet}
          </div>
          <div className="card-body">
            <p className="card-text">City: {city}</p>
            <p className="card-text">
              Address: {streetName}, {streetNumber}
            </p>
            <p className="card-text">Phone: {phone}</p>
            <p className="card-text">
              <a target="_blank" href={`https://${www}`}>
                Website: {www}
              </a>
            </p>
            <button className="btn btn-primary" onClick={this.vetLocation}>
              Show on the map
            </button>
          </div>
        </div>
      </div>
    );
  }
}

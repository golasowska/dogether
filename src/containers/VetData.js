import React from 'react';

export default class VetData extends React.Component {
  render() {
    const { vet, streetName, streetNumber, phone, www } = this.props.vet;
    return (
      <div className="col col-md-5 d-inline-block">
        <div className="card-vet card bg-light mb-3 text-left">
          <div className="card-header">Vet:</div>
          <div className="card-body">
            <h4 className="card-title">{vet}</h4>
            <p className="card-text">
              Address: {streetName}, {streetNumber}
            </p>
            <p className="card-text">Phone: {phone}</p>
            <p className="card-text">
              <a target="_blank" href={`https://${www}`}>
                Website: {www}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';

export default class MessageData extends React.Component {
  handleRemove = () => {
    this.props.removeMessage(this.props.message.key);
  };

  render() {
    const { name, phone, message } = this.props.message;
    return (
      <div className="mb-3 text-left mt-3 col-md-5 d-inline-block">
        <div className="card-message card bg-light ">
          <h4 className="card-header card-title bg-danger text-white">
            Contact : {phone}
          </h4>
          <div className="card-body">
            <h5 className="card-title mb-4">From : {name}</h5>
            <p className="card-text mb-4 font-italic">{message}</p>
            <button className="btn btn-danger" onClick={this.handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

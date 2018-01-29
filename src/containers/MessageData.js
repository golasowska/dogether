import React from 'react';

export default class MessageData extends React.Component {
  handleRemove = () => {
    this.props.removeMessage(this.props.message.key);
  };

  render() {
    const { name, phone, message } = this.props.message;
    return (
      <div className="card text-white bg-info mt-3 col-md-5 d-inline-block">
        <div className="card-header bg-info">Contact : {phone}</div>
        <div className="card-body" />
        <h5 className="card-title mb-4">From : {name}</h5>
        <p className="card-text mb-4">{message}</p>
        <button className="btn btn-light" onClick={this.handleRemove}>
          Remove
        </button>
      </div>
    );
  }
}

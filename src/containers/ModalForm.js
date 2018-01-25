import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please enter your name and surname.';
  }
  if (
    !values.phone ||
    values.phone.search('[0-9]') === -1 ||
    values.phone.length < 7
  ) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!values.message) {
    errors.message = 'Please type a message.';
  }
  return errors;
};

class ModalForm extends React.Component {
  handleFormSubmit = values => {
    this.props.adoptMessage(values, this.props.ownerUid);
    this.props.onRequestClose();
  };

  renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <textarea
          {...input}
          placeholder={label}
          className="form-control"
          type={type}
        />
        {touched && error && <div className="alert alert-danger">{error}</div>}
      </div>
    </fieldset>
  );

  render() {
    return (
      <div className="col-md-6 col-md-offset-3 text-center">
        <h2 className="text-center">Adopt a dog</h2>

        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <Field
            name="name"
            type="text"
            component={this.renderTextArea}
            label="Name and surname"
          />
          <Field
            name="phone"
            type="text"
            component={this.renderTextArea}
            label="Phone number"
          />
          <Field
            name="message"
            type="text"
            component={this.renderTextArea}
            label="Your message"
          />
          <button action="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, Actions)(
  reduxForm({
    form: 'modalform',
    validate
  })(ModalForm)
);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import FileField from './FileField';

import Navigation from './Navigation';
import Footer from './Footer';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Please enter your pet's name.";
  }
  if (!values.breed) {
    errors.breed = "Please enter dog's breed.";
  }
  return errors;
};

class AddAdoption extends React.Component {
  handleFormSubmit = values => {
    this.props.addAdoption(values, () => {
      this.props.history.push('/adoption');
    });
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
      <div>
        <Navigation />
        <div className="container">
          <div className="col-md-6 col-md-offset-3 mx-auto">
            <h2 className="text-center mt-5 mb-3">Add for adoption</h2>

            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
              <Field
                name="picture"
                type="picture"
                component={FileField}
                label="Picture"
              />
              <Field
                name="name"
                type="text"
                component={this.renderTextArea}
                label="Dog's name"
              />
              <Field
                name="breed"
                type="text"
                component={this.renderTextArea}
                label="Dog's breed"
              />
              <button action="submit" className="btn btn-primary">
                Add for adoption
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, Actions)(
  reduxForm({
    form: 'addadoption',
    validate
  })(AddAdoption)
);

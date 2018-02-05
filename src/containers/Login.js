import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { Link } from 'react-router-dom';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter an email.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  }
  if (!values.password) {
    errors.password = 'Please enter a password.';
  }
  return errors;
};

class Login extends React.Component {
  handleFormSubmit = values => {
    this.props.signInUser(values);
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          className="form-control"
          type={type}
        />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return (
        <div className="alert alert-danger">
          {this.props.authenticationError}
        </div>
      );
    }
    return <div />;
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3 mx-auto">
          <h2 className="text-center">Log In</h2>

          {this.renderAuthenticationError()}

          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field
              name="email"
              component={this.renderField}
              className="form-control"
              type="text"
              label="Email"
            />
            <Field
              name="password"
              component={this.renderField}
              className="form-control"
              type="password"
              label="Password"
            />

            <button action="submit" className="btn btn-primary">
              Sign In
            </button>
            <Link to="/signup" className="btn btn-info">
              Not a member? Register now!{' '}
            </Link>
          </form>
          <h4 className="text-secondary mb-5 mt-5 text-center">
            Welcome to the dog community. To join the group of dog lovers and
            meet new friends register in our dog social network!
          </h4>
          <div className="text-center">
            <i className="fa fa-paw fa-5x text-dark" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  };
}

export default connect(mapStateToProps, Actions)(
  reduxForm({
    form: 'login',
    validate
  })(Login)
);

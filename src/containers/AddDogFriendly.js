import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import Navigation from './Navigation';

const validate = values => {
  const errors = {};

  if(!values.place) {
    errors.place = 'Please enter a place.'
  }
  if(!values.tags) {
    errors.tags = 'Please enter tags.'
  }
  if(!values.description) {
    errors.description = 'Please enter a description.'
  }
  if(!values.www) {
    errors.www = 'Please enter a website.'
  }
  return errors;
}


class AddDogFriendly extends React.Component{

  handleFormSubmit = (values) => {
    this.props.addDogFriendly( values, () => {
      this.props.history.push('/dogfriendly')
    })
  }


  renderTextArea = ({ input, label, type, meta : { touched, error}}) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className='control-label'>{label}</label>
        <div>
          <textarea {...input} placeholder={ label } className='form-control' type={ type } />
          { touched && error && <div className='alert alert-danger'>{ error }</div>}
        </div>
    </fieldset>
  );

  render(){
    return <div>
      <Navigation />
      <div className='container'>
        <div className='col-md-6 col-md-offset-3'>
          <h2>Add a place</h2>

          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name='place' type='text' component={this.renderTextArea} label='Add a place' />
            <Field name='tags' type='text' component={this.renderTextArea} label='Add tags' />
            <Field name='description' type='text' component={this.renderTextArea} label='Add description' />
            <Field name='www' type='text' component={this.renderTextArea} label='Add website' />
            <button action='submit' className='btn btn-primary'>Add a place</button>
          </form>
        </div>
      </div>
    </div>
  }
}

export default connect( null, Actions) (reduxForm({
  form: 'adddogfriendly',
  validate
})(AddDogFriendly));

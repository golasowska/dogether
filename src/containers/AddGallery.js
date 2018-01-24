import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import FileField from './FileField';

import Navigation from './Navigation';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter your pet's name."
  }
  if(!values.picture) {
    errors.picture = "Please add your pet's photo."
  }
  return errors;
}

class AddGallery extends React.Component{

  handleFormSubmit = (values) => {
    this.props.addGallery(values, () => {
      this.props.history.push('/gallery');
    })
  }

  renderTextArea = ({ input, label, type, meta : { touched, error }}) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`} >
      <label className='control-label'>{label}</label>
        <div>
          <textarea {...input} placeholder={label} className='form-control' type={type} />
          {touched && error && <div className='alert alert-danger'>{error}</div>}
        </div>
    </fieldset>
  )

  render(){
    return <div>
            <Navigation />
            <div className='container'>
              <div className='col-md-6 col-md-offset-3'>
                <h2 className='text-center'>Add your pet</h2>

                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                  <Field name='picture' type='picture' component={FileField} label='Picture' />
                  <Field name='name' type='text' component={this.renderTextArea} label="Your pet's name" />
                  <button action='submit' className='btn btn-primary'>Add your pet</button>
                </form>
              </div>
            </div>
          </div>
  }
}

export default connect(null, Actions) (reduxForm({
  form: 'addgallery',
  validate
})(AddGallery));

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Navigation from './Navigation';

const validate = values => {
  const errors = {};

  if (!values.vet) {
    errors.vet = 'Please enter a vet name.'
  }
  if (!values.streetName) {
    errors.streetName = 'Please enter a street name.'
  }
  if(!values.streetNumber || values.streetNumber.search('[0-9]') ===-1) {
    errors.streetNumber = 'Please enter a street number'
  }
  if(!values.phone || values.phone.search('[0-9]')===-1 || values.phone.length < 7) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if(!values.www) {
    errors.www = 'Please enter a correct website address.'
  }
  return errors;
};


class AddVet extends React.Component{

  handleFormSubmit = (values) => {
    this.props.addVet( values, () => {
      this.props.history.push('/vet');
    })
  }

  renderTextArea = ({ input, label, type, meta : { touched, error }}) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className='control-label'>{ label }</label>
        <div>
          <textarea {...input} placeholder={ label } className='form-control' type={ type } />
          { touched && error && <div className='alert alert-danger'>{ error }</div>}
        </div>
    </fieldset>
  );

  render(){
    return (
      <div>
        <Navigation />
        <div className='container'>
          <div className='col-md-6 col-md-offset-3'>
            <h2 className='text-center'>Add a vet</h2>

              <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                <Field name='vet' type='text' component={this.renderTextArea} label='Vet name' />
                <Field name='streetName' type='text' component={this.renderTextArea} label = 'Street' />
                <Field name='streetNumber' type='number' component={this.renderTextArea} label = 'Street number' />
                <Field name='phone' type='number' component={this.renderTextArea} label = 'Phone number' />
                <Field name='www' type='text' component={this.renderTextArea} label = 'Website' />
                <button action='submit' className='btn btn-primary'>Add a vet</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, Actions) (reduxForm({
  form: 'addvet',
  validate
})(AddVet));

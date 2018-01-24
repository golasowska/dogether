import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import FileField from './FileField';

import Navigation from './Navigation';

const validate = values => {
  const errors={};
  if(!values.name) {
    errors.name = "Please enter your pet's name."
  }
  if(!values.race) {
    errors.race = "Please enter dog's race."
  }
  return errors;
}

class AddAdoption extends React.Component{

  handleFormSubmit=(values)=>{
    this.props.addAdoption(values, ()=> {
      this.props.history.push('/adoption');
    })
  }

  renderTextArea = ({ input, label, type, meta : { touched, error} }) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className='control-label'>{label}</label>
        <div>
          <textarea {...input} placeholder={label} className='form-control' type={type} />
          {touched && error && <div className='alert alert-danger'>{error}</div>}
        </div>
    </fieldset>
  )

  render(){
    return (
      <div>
        <Navigation />
        <div className='container'>
          <div className='col-md-6 col-md-offset-3'>
            <h2 className='text-center'>Add for adoption</h2>

            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
              <Field name='picture' type='picture' component={FileField} label='Picture' />
              <Field name='name' type='text' component={this.renderTextArea} label="Dog's name" />
              <Field name='race' type='text' component={this.renderTextArea} label="Dog's race" />
              <button action='submit' className='btn btn-primary'>Add for adoption</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, Actions)(reduxForm({
  form: 'addadoption',
  validate
})(AddAdoption));

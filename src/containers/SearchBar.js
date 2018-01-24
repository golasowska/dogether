import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const validate = values => {
  const errors = {};
  if(!values.title) {
    errors.title = 'Please enter a tag.'
  }
  return errors;
}

class SearchBar extends React.Component{

  handleFormSubmit = (values) => {
    this.props.fetchDfTags(values);
    values.title = '';
  }

  renderTextField = ({ input, label, type, meta : { touched, error }}) => {
    return (
      <fieldset className='form-group d-inline-block'>
        <label className='label-control mt-4'>{ label }</label>
        <div>
          <input {...input} placeholder={label} className='form-control text-lowercase' type={type}/>
          {touched && error && <div className='alert alert-danger'>{error}</div>}
        </div>
      </fieldset>
    )
  }



  render(){
    return <div className='row justify-content-center'>
            <div className='col-10 col-sm-6 col-md-4'>
              <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                <Field name='title' type='text' component={this.renderTextField} label='Searching for...' />
                <button type='submit' className='btn bmd-btn-icon'><i className="material-icons">search</i></button>
              </form>
            </div>
          </div>
  }
}

export default connect(null, Actions) (reduxForm({form:'searchbar', validate})(SearchBar));

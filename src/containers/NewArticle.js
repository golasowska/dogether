import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import * as Actions  from '../actions';

const validate = values => {
  const errors = {};
  // console.log('dlugosc validate', values.title.length);
  // console.log('valius', values.title);

if (!values.title) {
  errors.title = 'Please enter a title.';
}
//  if (values.title.length < 3) {
//   errors.title = 'The title is too short.'
// }
 if (!values.content) {
  errors.content = 'Please add a content.'
}
 // if(values.content.length < 15 ) {
 //   errors.content = 'The article is too short.'
 // }
 return errors;
 };

class NewArticle extends React.Component{

  handleFormSubmit = (values) => {
    this.props.createNewArticle(values);

    console.log('values art ', values);
    console.log('dlugosc', values.title.length);
  }

  renderTextArea = ({ input, label, type, meta: { touched, error}}) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className='control-label'>{label}</label>
        <div>
          <textarea {...input} placeholder={label} className='form-control' type={type} />
           {touched && error && <div className='help-block'>{error}</div>}
        </div>
    </fieldset>
  );

  render() {
    return (
      <div className='container'>
        <div className='col-md-6 col-md-offset-3'>
          <h2 className='text-center'>New Article</h2>

          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name='title' type='text' component={this.renderTextArea} label='Title' />
            <Field name='content' type='text' component={this.renderTextArea} label='Article content' />

            <button action='submit' className='btn btn-primary'>Add article</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, Actions) (reduxForm({
  form: 'newarticle',
  validate
})(NewArticle));

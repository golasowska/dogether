import React from 'react';
import PreviewPicture from './PreviewPicture';

class FileField extends React.Component{
  constructor(state){
    super(state);
    this.state = {
      picture: 'Please attach a picture',
      pictureUrl: null
    };
  }

  displayPicture(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      console.log(file);
      this.setState({
        picture: file,
        pictureUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }
  render(){
    const { input, label} = this.props;
    delete input.value;
    return(
      <div>
        <div className='form-group'>
          <label className='control-label'>{label}</label>
            <div>
              <input type='file'
              className='form-control' {...input}
              onChange={(event) => {
                this.displayPicture(event);
              }}
              />
            </div>
        </div>
        <PreviewPicture picture={this.state.picture} pictureUrl={this.state.pictureUrl} />
      </div>
    );
  }
}

export default FileField;

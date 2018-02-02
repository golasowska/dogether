import React from 'react';
import PreviewPictureSlide from '../containers/PreviewPictureSlide';

export default class HomeGalleryData extends React.Component {
  render() {
    const colors = ['info', 'danger', 'warning', 'primary', 'secondary'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    const { name, picture } = this.props.pet;
    return (
      <div className="d-inline-block text-center mt-4 mb-4">
        <div className="card bg-light text-center mt-3 mb-3">
          <h4 className={`text-white bg-${randomColor} card-header card-title`}>
            {name}
          </h4>
          <div>
            <PreviewPictureSlide className="" pictureUrl={picture} />
          </div>
        </div>
      </div>
    );
  }
}

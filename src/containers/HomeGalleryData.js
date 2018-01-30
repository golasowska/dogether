import React from 'react';
import PreviewPictureSlide from '../containers/PreviewPictureSlide';

export default class HomeGalleryData extends React.Component {
  render() {
    const { name, picture } = this.props.pet;
    return (
      <div className="d-inline-block text-center mt-4 mb-4">
        <div className="card bg-light text-center">
          <h4 className="bg-light card-header card-title">{name}</h4>
          <div className="mt-2 mb-2 ml-2 mr-2">
            <PreviewPictureSlide className="" pictureUrl={picture} />
          </div>
        </div>
      </div>
    );
  }
}

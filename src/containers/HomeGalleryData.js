import React from 'react';
import PreviewPictureSlide from '../containers/PreviewPictureSlide';

export default class HomeGalleryData extends React.Component {
  render() {
    const colors = ['info', 'danger', 'warning', 'primary', 'secondary'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    const { picture } = this.props.pet;
    return (
      <div className={`card bg-${randomColor} text-center mt-3 mb-3`}>
        <div className="mt-2 mb-2 mr-2 ml-2 card-body">
          <PreviewPictureSlide pictureUrl={picture} />
        </div>
      </div>
    );
  }
}

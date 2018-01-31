import React from 'react';

const PreviewPictureSlide = props => {
  const { picture, pictureUrl } = props;

  if (!pictureUrl) {
    return (
      <div
        style={{
          height: '500px',
          borderWidth: '.1rem',
          borderStyle: 'solid',
          borderColor: 'grey'
        }}
        className="text-center mb-1"
      >
        {picture}
      </div>
    );
  } else {
    return (
      <img
        style={{ height: '300px' }}
        className="img-fluid"
        src={pictureUrl}
        alt="dogs"
      />
    );
  }
};

export default PreviewPictureSlide;

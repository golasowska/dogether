import React from 'react';

const PreviewPictureArticle = props => {
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
      <div
        className="photo-article-preview"
        style={{
          height: '400px',
          background: `url(${pictureUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />
    );
  }
};

export default PreviewPictureArticle;

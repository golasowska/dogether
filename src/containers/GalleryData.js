import React from 'react';
import PreviewPicture from '../containers/PreviewPicture';

export default class GalleryData extends React.Component{
  render(){
    const {name, picture} = this.props.pet
    return (
      <div className='col col-md-5 d-inline-block'>
        <div className='card-gallery card bg-light mb-3 text-left'>
          <div className='card-header card-title'>{name}</div>
            <div className='card-body photo-gallery text-center'>
              <PreviewPicture pictureUrl={picture} />
            </div>
        </div>
      </div>
    )
  }
}

import React from 'react';
import PreviewPicture from './PreviewPicture';


export default class AdoptionData extends React.Component{
  render(){
    const { name, race, picture} = this.props.dog
    return (<div className='col col-md-5 d-inline-block'>
             <div className='card-gallery card bg-light mb-3 text-center'>
              <h4 className='card-header card-title'>{name}</h4>
              <div className='card-body photo-gallery text-center'>
                <PreviewPicture pictureUrl={picture} />
              </div>
              <p className='card-title'>{race}</p>
              <button className='btn btn-primary'>Reserve</button>
             </div>
          </div>)
  }
}

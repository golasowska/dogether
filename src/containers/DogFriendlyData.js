import React from 'react';

export default class DogFriendlyData extends React.Component {
  render(){
    const { place, tags, description, www} = this.props.dogFriendly
    return (<div className='col col-md-5 d-inline-block'>
              <div className='card-vet card bg-light mb-3 text-left'>
                <div className='card-header'>Place:</div>
                  <div className='card-body'>
                  <h4 className='card-title'>{place}</h4>
                  <p className='card-text'>Tags: {tags}</p>
                  <p className='card-text'>Description: {description}</p>
                  <p className='card-text'><a target='_blank' href={`http://${www}`}>Website: {www}</a></p>
                  </div>
              </div>
            </div>)
  }
}

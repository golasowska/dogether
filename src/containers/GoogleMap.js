import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMap extends React.Component {
  render() {
    // const style = {
    //   width: '75%',
    //   height: '75%',
    //   position: 'relative'
    // };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        className="col-md-8 text-center"
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
          name={'Dolores park'}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>jolo</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDDBeVS9help9v9lKS5_De_ddxGJH4wtzk'
})(GoogleMap);

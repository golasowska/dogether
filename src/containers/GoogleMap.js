import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends React.Component {
  // const Marker = new google.maps.Marker({
  //   position: new google.maps.LatLng(this.state.lat, this.state.lng)
  // });
  constructor(props) {
    super(props);
    this.state = {
      lat: 37.759703,
      lng: -122.428093
    };
  }
  showMarker = () => {
    const address = this.props.vetLoc.toString();
    const google = this.props.google;
    const geocoder = new google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode(
        {
          address: address
        },
        (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            this.setState({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            });
            console.log('results', results[0]);
            console.log('lat', results[0].geometry.location.lat());
            console.log('lat', results[0].geometry.location.lng());
            return results[0];
          }
        }
      );
    }
  };

  render() {
    console.log('propsiki vetLoc w mapach render', this.props.vetLoc);
    const style = {
      width: '75%',
      height: '50%',
      position: 'relative'
    };

    if (this.props.vetLoc) {
      this.showMarker();
    }

    return (
      <Map
        google={this.props.google}
        zoom={14}
        className="col-md-8 text-center"
        style={style}
      >
        <Marker
          name={'Dolores park'}
          position={{ lat: this.state.lat, lng: this.state.lng }}
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

import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 50.0740676,
      lng: 19.932697599999983,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log('propsiki vetLoc w mapach render', this.props.vetLoc[0]);
    console.log('propsy mapy', this.props.google);
    const style = {
      width: '75%',
      height: '50%',
      position: 'relative'
    };

    return (
      <Map
        google={this.props.google}
        style={style}
        className={'map'}
        centerAroundCurrentLocation={true}
        // initialCenter={{
        //   lat: 50.0740676,
        //   lng: 19.932697599999983
        // }}
        center={{ lat: this.props.vetLoc[1], lng: this.props.vetLoc[2] }}
        zoom={15}
        onClick={this.onMapClicked}
        // mapCenter={this.props.google.maps.LatLng()}
      >
        <Marker
          title={this.props.vetLoc[0]}
          name={this.props.vetLoc[0]}
          position={{ lat: this.props.vetLoc[1], lng: this.props.vetLoc[2] }}
          onClick={this.onMarkerClick}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.props.vetLoc[0]}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDDBeVS9help9v9lKS5_De_ddxGJH4wtzk'
})(GoogleMap);

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
    if (!this.props.google) {
      return <div className="alert alert-info">Loading...</div>;
    }

    // if (this.props.google && !this.props.vetLoc[1]) {
    //   return (
    //     <div className="alert alert-info">
    //       Searching for data. Click the button again !
    //     </div>
    //   );
    // }

    return (
      <Map
        google={this.props.google}
        centerAroundCurrentLocation={true}
        center={{ lat: this.props.vetLoc[1], lng: this.props.vetLoc[2] }}
        zoom={18}
        onClick={this.onMapClicked}
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

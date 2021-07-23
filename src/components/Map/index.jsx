import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      stores: [],
    };
  }

  // displayMarkers = () => {
  //   // eslint-disable-next-line react/destructuring-assignment
  //   return this.state.stores.map((store, index) => {
  //     return (
  //       <Marker
  //         key={index}
  //         id={index}
  //         position={{
  //           lat: store.latitude,
  //           lng: store.longitude,
  //         }}
  //       />
  //     );
  //   });
  // };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return <Map google={this.props.google} zoom={10} centerAroundCurrentLocation />;
  }
}

export default GoogleApiWrapper(() => ({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY, // 'AIzaSyBEwmmRRRvykvv_RhPfA0l_iWIjJpwSpKQ',
  language: 'pt-BR',
}))(MapContainer);

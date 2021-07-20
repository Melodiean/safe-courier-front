import React from "react";
import { Map, GoogleApiWrapper } from "google-map-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export function MapContainer() {
  return (
    <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      center={{
        lat: 0.347596,
        lng: 32.58252,
      }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: "process.env.REACT_APP_GAPI",
})(MapContainer);

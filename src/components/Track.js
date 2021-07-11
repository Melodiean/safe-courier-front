import React from "react";
import { GoogleMap } from "react-google-maps";
// import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%",
};

// function MapContainer(props) {
//     return (
//       <Map
//         google={props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: 0.347596,
//           lng: 32.58252,
//         }}
//       />
//     );
//   }

//   export default GoogleApiWrapper(
//   {
//      apiKey: "AIzaSyC_aAyiW4sPjqwDvvNXSE5oGxja0dT6UrI",
//    })(MapContainer);

export default function Track() {
  return (
    <div className="boxed">
      <h1>Track Parcel</h1>
      <div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{
          lat: 0.347596,
          lng: 32.58252,
        }}
        zoom={10}
      />
      </div>
    </div>
  );
}

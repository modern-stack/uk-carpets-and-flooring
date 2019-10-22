import React from 'react'
import { Map, GoogleApiWrapper, Circle } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%',
  zIndex: '9999999',
}

const MapContainer = props => {
  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      <Circle
        defaultCenter={{
          lat: 47.444,
          lng: -122.176,
        }}
        radius={20}
        options={{ strokeColor: '#ff0000' }}
      />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCC8nW0YZNc-i8o_8ZSxMtG3gtmUsXaTg8',
})(MapContainer)

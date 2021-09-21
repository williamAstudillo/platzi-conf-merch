import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const { API_GOOGLE } = process.env;
const Map = ({data}) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.1718706,
  };

  return (
    <LoadScript googleMapsApiKey={API_GOOGLE}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={data}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

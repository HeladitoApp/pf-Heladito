import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import s from "./map.module.css";
import { Box } from '@chakra-ui/react';

const Marcador = () => <div className={s.marcador}></div>;

export default function Mapa() {

const containerStyle = {
    width: '250px',
    height: '250px'
  };
  
  const center = {
    lat: -34.604527,
    lng: -58.397300
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAdFvEuvfmpHiw9qSye4Cyj6Yedc7zOS84"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marcador
          lat={-34.60376}
          lng={-58.38162}
          text="Heladitos"
        />
      </GoogleMap>
    </LoadScript>
  )
}

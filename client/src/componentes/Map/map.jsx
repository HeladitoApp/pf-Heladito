import React , { useState } from 'react'
import { GoogleMap, LoadScript ,InfoWindow, Marker} from '@react-google-maps/api';
import icono from "../../assets/pin8.png"
/* import s from "./map.module.css";
import { Box } from '@chakra-ui/react'; */
const markers = [
  {
    id: 1,
    name: "Sucursal HeladitosApp Buenos Aires ARG",
    position: { lat: -34.604527, lng: -58.397300 },
    direction: "Av. Corrientes 2100"
  },
  {
    id: 2,
    name: "Sucursal HeladitosApp Tucumán ARG",
    position: { lat: -26.829801 , lng: -65.203815 },
    direction: "San Martin 400"
  },
  {
    id: 3,
    name: "Sucursal HeladitosApp Necochea ARG",
    position: { lat: -38.556530, lng: -58.741603 },
    direction: "Av.58 1111"
  },
  {
    id: 4,
    name: "Sucursal HeladitosApp Jujuy ARG",
    position: { lat: -24.262792, lng: -65.222512},
    direction: "Casabindo 337"
  },
  {id: 5,
    name: "Sucursal HeladitosApp Perú",
    position: { lat: -5.196762, lng: -80.627196 },
    direction: "JR E 437, Piura 20001"},
  {id: 6,
    name: "Sucursal HeladitosApp Molina Plaza Perú",
    position: { lat: -12.091087, lng: -76.950456 },
    direction: "JR E 437, Piura 20001"},
  {id: 7,
    name: "Sucursal HeladitosApp Colombia",
    position: { lat: 3.42384, lng: -76.50674 },
    direction: "Dg. 30"}, 
  {id: 8,
    name: "Sucursal HeladitosApp La Rioja ARG",
    position: { lat: -29.165598350783327, lng: -67.49481670464624 },
    direction: "9 de julio 80"},
];

export default function Mapa() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

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
      googleMapsApiKey="AIzaSyBnThDdJuBYKQu3x9N-gjf2LaFJ3GeVhjY"
    >
       
      <GoogleMap
      onClick={() => setActiveMarker(null)}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
      >

        {markers.map(({ id, name, position, direction }) => (
        <Marker
        
          key={id}
          position={position}
          icon={icono}
          onClick={() => handleActiveMarker(id)}
        >
            {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div><div>{name}</div><div>{direction}</div></div>           
            </InfoWindow>
          ) : null}
        </Marker>
        ))}
      </GoogleMap>
    </LoadScript>  
  
 /*      <div className="google-map-code">
      <iframe src="https://www.google.com/maps/d/embed?mid=1zTnce5J3-2eOEJot3P_BOQp6NSE8t8c&ehbc=2E312F" width="250px" height="250px"></iframe>
      </div>  */
  

  )
}

 


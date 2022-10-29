import React , { useState } from 'react'
import { GoogleMap, LoadScript ,InfoWindow, Marker} from '@react-google-maps/api';
/* import s from "./map.module.css";
import { Box } from '@chakra-ui/react'; */
const markers = [
  {
    id: 1,
    name: "Sucursal HeladitosApp Franco",
    position: { lat: -34.604527, lng: -58.397300 }
  },
  {
    id: 2,
    name: "Sucursal HeladitosApp Sofi",
    position: { lat: -26.829801 , lng: -65.203815 }
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 34.052235, lng: -118.243683 }
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 40.712776, lng: -74.005974 }
  }
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
        zoom={12}
      >
        {markers.map(({ id, name, position }) => (
        <Marker
        
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
            {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
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

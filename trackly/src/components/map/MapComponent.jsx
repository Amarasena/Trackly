// src/components/map/MapComponent.jsx
import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useGoogleMaps } from '../../contexts/location/GoogleMapsContext';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 6.0329,
  lng: 80.2168
};

const MapComponent = ({ onClick, departure, arrival }) => {
  const mapRef = useRef(null);
  const googleMaps = useGoogleMaps();

  useEffect(() => {
    if (googleMaps && mapRef.current) {
      const map = new googleMaps.Map(mapRef.current, {
        center,
        zoom: 8
      });

      map.addListener('click', onClick);
    }
  }, [googleMaps, onClick]);

  return (
    <div ref={mapRef} style={containerStyle}>
      {googleMaps && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onClick={onClick}
        >
          {departure && <Marker position={departure} />}
          {arrival && <Marker position={arrival} />}
        </GoogleMap>
      )}
    </div>
  );
};

export default MapComponent;

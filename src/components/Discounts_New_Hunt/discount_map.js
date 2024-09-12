import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';
import './detail_discount.css'
const containerStyle = {
  width: '100%',
  height: '500px'
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const DiscountMap = ({ destination }) => {
  const [userLocation, setUserLocation] = useState(null);
 
  // Get user's current location
  useEffect(() => {
   
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
         
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  // Google Maps API key - replace with your actual API key
  const apiKey = 'AIzaSyC6xvlbMFrLYt9ExmJvyFnd5pawC_Al4rs';

  // Ensure destination has valid lat and lng properties
  const destinationLocation = destination?.lat && destination?.lng ? {
    lat: destination.lat,
    lng: destination.lng,
  } : null;

  // Only create the path if both locations are valid
  const path = userLocation && destinationLocation ? [
    userLocation, 
    destinationLocation
  ] : [];

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      {userLocation && destinationLocation && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={5}
          options={mapOptions}
        >
          {/* Marker for User's current location */}
          <Marker position={userLocation} label="You" />

          {/* Marker for Destination location */}
          <Marker position={destinationLocation} label="Destination" />

          {/* Only render polyline if both userLocation and destinationLocation are valid */}
          {path.length > 0 && (
            <Polyline
              path={path}
              options={{
                strokeColor: '#FF0000',
                strokeOpacity: 1,
                strokeWeight: 4,
              }}
            />
          )}
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default DiscountMap;

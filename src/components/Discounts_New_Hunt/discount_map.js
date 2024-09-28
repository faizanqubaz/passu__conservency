import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, Polyline, Marker } from '@react-google-maps/api';
import './detail_discount.css';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const DiscountMap = ({ destination }) => {
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

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

  // Load Google Maps script if it's not already loaded
  const loadGoogleMapsScript = () => {
    const scriptExists = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js?"]`);
    if (!scriptExists) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`; // Add your API key here
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      setScriptLoaded(true); // If script exists, set as loaded
    }
  };

  // Load the script on mount
  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  // Ensure destination has valid lat and lng properties
  const destinationLocation = destination?.lat && destination?.lng
    ? {
        lat: parseFloat(destination.lat),
        lng: parseFloat(destination.lng),
      }
    : null;

  // Create the path if both locations are valid
  const path = userLocation && destinationLocation ? [userLocation, destinationLocation] : [];

  // Use useEffect to fit bounds when both userLocation and destinationLocation are available
  useEffect(() => {
    if (mapRef.current && userLocation && destinationLocation && window.google) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(userLocation);
      bounds.extend(destinationLocation);
      mapRef.current.fitBounds(bounds); // Auto-zoom to fit both markers
    }
  }, [userLocation, destinationLocation]);

  // Render map only if script is loaded
  return scriptLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={(map) => (mapRef.current = map)} // Capture map reference
      center={userLocation || { lat: 0, lng: 0 }} // Fallback center
      zoom={5} // Default zoom, will be overridden by fitBounds if markers exist
      options={mapOptions}
    >
      {/* Marker for User's current location */}
      {userLocation && <Marker position={userLocation} label="You" />}

      {/* Marker for Destination location */}
      {destinationLocation && <Marker position={destinationLocation} label="Destination" />}

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
  ) : null;
};

export default DiscountMap;

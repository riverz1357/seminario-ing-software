import React from 'react';
import { Map as MapIcon, Navigation } from 'lucide-react';
import '../styles/Map.css';

const MapLocation = () => {
  const location = {
    lat: 1.21817,
    lng: -77.28019
  };

  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [mapType, setMapType] = React.useState('satellite');

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAax0GjD43l_THnD430Aa_qhNaYNpYAnwI`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', initializeMap);
    
    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', initializeMap);
      document.body.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current) return;

    const mapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: mapType,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.TOP_RIGHT,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_CENTER,
      },
      streetViewControl: true,
      streetViewControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_TOP,
      }
    };

    const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
    const marker = new window.google.maps.Marker({
      position: location,
      map: newMap,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#22F36E",
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: "#ffffff",
      }
    });

    setMap(newMap);
    setIsLoaded(true);
  };

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="map-container">
      <div className="map-header">
        <MapIcon className="map-icon" />
        <h2>Nuestra Ubicación</h2>
      </div>
      <div className="map-content">
        <div ref={mapRef} className="map" />
        {!isLoaded && (
          <div className="map-loading">
            <Navigation className="loading-icon" />
            <p>Cargando mapa...</p>
          </div>
        )}
      </div>
      <div className="map-footer">
        <p>Visítanos en nuestra ubicación</p>
        <button 
          className="directions-button"
          onClick={handleGetDirections}
          aria-label="Obtener direcciones"
        >
          <Navigation className="direction-icon" />
          Cómo llegar
        </button>
      </div>
    </div>
  );
};

export default MapLocation;
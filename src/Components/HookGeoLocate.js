import React, { useState, useEffect } from "react";
import "./HookGeoLocate.css";

function Locate() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);
    return () => navigator.geolocation.clearWatch(watchId); // componentWillUmnount()
  }, []);

  function handlePositionReceived(coords) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
    
    console.log(coords)
  }

  return (
    <>
      <span className="span_latitude">Latitude: {location.latitude}</span>
      <span className="span_latitude">Longitude: {location.longitude}</span>
    </>
  );
}

export default Locate;

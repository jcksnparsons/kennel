import React, { useEffect, useState } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard";

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return LocationManager.getAll().then(locationsFromAPI => {
      // We'll do something more interesting with this data soon.
      setLocations(locationsFromAPI);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  const deleteLocation = id => {
    LocationManager.delete(id).then(() => {
      LocationManager.getAll().then(setLocations);
    });
  };

  return (
    <div className="container-cards">
      {locations.map(location => (
        <LocationCard key={location.id} location={location} deleteLocation={deleteLocation} />
      ))}
    </div>
  );
};

export default LocationList;

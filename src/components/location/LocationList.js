import React, { useEffect, useState } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard";

const LocationList = props => {
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
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/locations/new");
          }}
        >
          Add Location
        </button>
      </section>
      <div className="container-cards">
        {locations.map(kennelLocation => (
          <LocationCard
            key={kennelLocation.id}
            kennelLocation={kennelLocation}
            deleteLocation={deleteLocation}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default LocationList;

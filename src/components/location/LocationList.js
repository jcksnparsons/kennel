import React, { useEffect, useState } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard";

const LocationList = (props) => {
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
      {locations.map(location => (
        // prepare for pain on the location prop, according to Bryan
        <LocationCard key={location.id} location={location} deleteLocation={deleteLocation} />
      ))}
    </div>
    </>
  );
};

export default LocationList;

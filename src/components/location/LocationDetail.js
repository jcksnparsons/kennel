import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = props => {
  const [location, setLocation] = useState({
    name: "",
    address: "",
    employees: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const hasUser = props.hasUser;

  const handleDelete = () => {
    //invoke the delete function in LocationManager and re-direct to the location list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.getwithEmployees(props.locationId).then(location => {
      setLocation({
        name: location.name,
        address: location.address,
        employees: location.employees
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{location.name}</span>
        </h3>
        <p>Address: {location.address}</p>
        {hasUser ? (
          <p>
            Employees:
            {location.employees.map(employee => {
              return <li>{employee.name}</li>;
            })}
          </p>
        ) : null}
        {hasUser ? (
          <button type="button" disabled={isLoading} onClick={handleDelete}>
            Close Location
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default LocationDetail;

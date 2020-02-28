import React from "react";
// import './Animal.css'
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-locationname">{props.kennelLocation.name}</span>
        </h3>
        <p>Address: {props.kennelLocation.address}</p>
        <Link to={`/locations/${props.kennelLocation.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/locations/${props.kennelLocation.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.kennelLocation.id)}
        >
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationCard;

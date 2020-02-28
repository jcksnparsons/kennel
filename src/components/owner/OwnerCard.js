import React from "react";
// import './Animal.css'

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
        <p>Phone Number: {props.owner.phoneNumber}</p>
        <p>Pet: {props.owner.dog}</p>
        <button
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>
          Close Account
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;

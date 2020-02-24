import React from 'react';
// import './Animal.css'

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-ownername">
          {props.owner.name}
        </span></h3>
        <p>Phone Number: {props.owner.phoneNumber}</p>
        <p>Pet: {props.owner.dog}</p>
      </div>
    </div>
  );
}

export default OwnerCard;
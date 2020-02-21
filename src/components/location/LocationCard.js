import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.jpg')} alt="Location" />
          </picture>
          <h3>Name: <span className="card-employeename">Kennel HQ</span></h3>
          <p>Address: Not Available</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;
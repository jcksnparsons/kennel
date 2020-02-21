import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./owner.jpg')} alt="Owner" />
          </picture>
          <h3>Name: <span className="card-employeename">Jack Parsons</span></h3>
          <p>Dogs: Cormac and Melba</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
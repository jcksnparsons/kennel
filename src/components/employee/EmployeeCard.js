import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.jpg')} alt="Employee" />
          </picture>
          <h3>Name: <span className="card-employeename">Jack Parsons</span></h3>
          <p>Position: Mr. Manager</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
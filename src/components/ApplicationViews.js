import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
// import LocationCard from "./location/LocationCard";
import EmployeeList from "./employee/EmployeeList";
// import OwnerCard from "./owner/OwnerCard";
import LocationList from "./location/LocationList";
import OwnerList from "./owner/OwnerList";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          path="/animals"
          render={props => {
            return <AnimalList />;
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList />;
          }}
        />
        <Route
          path="/locations"
          render={props => {
            return <LocationList />;
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return <OwnerList />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;

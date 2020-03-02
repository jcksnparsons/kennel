import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";
import Login from "./auth/Login";

class ApplicationViews extends Component {
  render() {
    const isAuthenticated = () =>
      sessionStorage.getItem("credentials") !== null;

    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        {/* Make sure you add the `exact` attribute here */}
        <Route
          exact
          path="/animals"
          render={props =>
            isAuthenticated() ? (
              <AnimalList {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/animals/new"
          render={props =>
            isAuthenticated() ? (
              <AnimalForm {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={props =>
            isAuthenticated() ? (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props =>
            isAuthenticated() ? (
              <AnimalEditForm {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/employees"
          render={props =>
            isAuthenticated() ? (
              <EmployeeList {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/employees/new"
          render={props =>
            isAuthenticated() ? (
              <EmployeeForm {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/employees/:employeeId(\d+)/edit"
          render={props =>
            isAuthenticated() ? (
              <EmployeeEditForm {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/locations"
          render={props =>
            isAuthenticated() ? (
              <LocationList {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/locations/:locationId(\d+)"
          render={props =>
            // Pass the locationId to the LocationDetailComponent
            isAuthenticated() ? (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/locations/new"
          render={props => 
            isAuthenticated() ? (
              <LocationForm {...props} />
             ) : (
              <Redirect to="/login" />
             )
          }
        />
        <Route
          path="/locations/:locationId(\d+)/edit"
          render={props =>
            isAuthenticated() ? (
              <LocationEditForm {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/owners"
          render={props => 
            isAuthenticated() ? (
              <OwnerList {...props} />
             ) : (
              <Redirect to="/login" />
             )
          }
        />
        <Route
          path="/owners/new"
          render={props => 
            isAuthenticated() ? (
              <OwnerForm {...props} />
             ) : (
              <Redirect to="/login" />
             )
          }
        />
        <Route
          path="/owners/:ownerId(\d+)/edit"
          render={props =>
            isAuthenticated() ? (
              <OwnerEditForm {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;

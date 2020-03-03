import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeList from "./employee/EmployeeList";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";
import Login from "./auth/Login";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
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
          hasUser ? <AnimalList {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/animals/new"
        render={props =>
          hasUser ? <AnimalForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props =>
          hasUser ? (
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
          hasUser ? <AnimalEditForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        exact
        path="/employees"
        render={props =>
          hasUser ? <EmployeeList {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/employees/new"
        render={props =>
          hasUser ? <EmployeeForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/employees/:employeeId(\d+)/details"
        render={props => {
          return <EmployeeWithAnimals {...props} />;
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)/edit"
        render={props =>
          hasUser ? <EmployeeEditForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        exact
        path="/locations"
        render={props =>
          <LocationList {...props} />
        }
      />
      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={props =>
          // Pass the locationId to the LocationDetailComponent
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
        }
      />
      <Route
        path="/locations/new"
        render={props =>
          hasUser ? <LocationForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={props =>
          hasUser ? <LocationEditForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        exact
        path="/owners"
        render={props =>
          hasUser ? <OwnerList {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/owners/new"
        render={props =>
          hasUser ? <OwnerForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/owners/:ownerId(\d+)/edit"
        render={props =>
          hasUser ? <OwnerEditForm {...props} /> : <Redirect to="/login" />
        }
      />
    </React.Fragment>
  );
};

export default ApplicationViews;

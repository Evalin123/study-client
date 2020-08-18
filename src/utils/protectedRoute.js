import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

function isLoggedIn() {
  if (localStorage.getItem("jwtToken")) {
    return true;
  }
  return false;
}

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) => (
    isLoggedIn()
      ? React.createElement(component, props)
      : <Redirect to={{ pathname: '/login' }} />
  );
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
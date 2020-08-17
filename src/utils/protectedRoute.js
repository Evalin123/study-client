import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

function isLoggedIn() {
  if(localStorage.getItem("jwtToken")) {
    return true;
  }
  return false;
}

export class ProtectedRoute extends Route {
  render() {
    if (!isLoggedIn()) {
        return <Redirect to='/login' />
    } else {
      return super.render();
    }
  }
}

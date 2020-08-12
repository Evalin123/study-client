import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Register from '../register/register';
import Login from '../login/login';
import AddUnit from '../addUnit/addUnit';
import EditUnit from '../editUnit/editUnit';

export default function Home() {
  return (
    <div className="Home">
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/addUnit" component={AddUnit}></Route>
      <Route path="/editUnit/:id" component={EditUnit}></Route>
    </div>
  )
}
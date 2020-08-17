import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Register from './register';
import Login from './login';
import AddUnit from './addUnit';
import EditUnit from './editUnit';
import Subject from './subject';
import Header from '../componant/header/header';

import { ProtectedRoute } from '../utils/protectedRoute';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <ProtectedRoute path="/addUnit/:subjectId" component={AddUnit}></ProtectedRoute>
      <ProtectedRoute path="/editUnit/:id" component={EditUnit}></ProtectedRoute>
      <ProtectedRoute path="/subject" component={Subject}></ProtectedRoute>
    </div>
  )
}
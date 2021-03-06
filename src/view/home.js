import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Register from './register';
import Login from './login';
import AddUnit from './addUnit';
import EditUnit from './editUnit';
import Subject from './subject';
import AddSubject from './addSubject';
import Header from '../component/header/header';
import BORoute from './backOfficeRoute';
import EditSubject from './editSubject';
import QuizRoute from './quizRoute';
import AddQuiz from './addQuiz';

import PrivateRoute from '../utils/protectedRoute';

const useStyles = makeStyles((theme) => ({
  root: {
    left: "(100%-240px)/2",
  },
}));

export default function Home() {
  const classes = useStyles();
  const userString = localStorage.getItem("user");
  return (
    <div className="Home">
      {userString ?
        <Header /> : null
      }
      <div className={classes.root}>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/addUnit/:subjectId" component={AddUnit}></PrivateRoute>
        <PrivateRoute path="/editUnit/:id" component={EditUnit}></PrivateRoute>
        <PrivateRoute path="/subject" component={Subject}></PrivateRoute>
        <PrivateRoute path="/addSubject" component={AddSubject}></PrivateRoute>
        <PrivateRoute path="/editSubject/:subjectId" component={EditSubject}></PrivateRoute>
        <PrivateRoute path="/backoffice" component={BORoute}></PrivateRoute>
        <PrivateRoute path="/quiz" component={QuizRoute}></PrivateRoute>
        <PrivateRoute path="/addQuiz/:subjectId" component={AddQuiz}></PrivateRoute>
      </div>
    </div>
  )
}
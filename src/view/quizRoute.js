import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import QuizSubjects from './quizSubjects';
import QuizList from './quizList';
import PrivateRoute from '../utils/protectedRoute';

const QuizRoute = ({ match }) => {
  return (
    <div>
      <PrivateRoute exact path={`${match.url}`} component={QuizSubjects} />
      <PrivateRoute exact path={`${match.url}/:subjectId`} component={QuizList} />
    </div>
  )
}

export default QuizRoute;
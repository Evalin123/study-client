import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import UnitList from './unitList';
import SubjectList from './subjectList';
import ReadUnit from './readUnit';
import PrivateRoute from '../utils/protectedRoute';

const Subject = ({ match }) => {
  return (
    <div>
      <PrivateRoute exact path={`${match.url}`} component={SubjectList} />
      <PrivateRoute exact path={`${match.url}/:subjectId`} component={UnitList} />
      <PrivateRoute path={`${match.url}/:subjectId/:unitId`} component={ReadUnit} />
    </div>
  )
}

export default Subject;
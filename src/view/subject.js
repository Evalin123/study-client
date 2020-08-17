import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import UnitList from './unitList';
import SubjectList from './subjectList';
import ReadUnit from './readUnit';
import { ProtectedRoute } from '../utils/protectedRoute';

const Subject = ({ match }) => {
  return (
    <div>
      <ProtectedRoute exact path={`${match.url}`} component={SubjectList} />
      <ProtectedRoute exact path={`${match.url}/:subjectId`} component={UnitList} />
      <ProtectedRoute path={`${match.url}/:subjectId/:unitId`} component={ReadUnit} />
    </div>
  )
}

export default Subject;
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import BackOffice from './backOffice';
import BOUnitList from './boUnitList';
import PrivateRoute from '../utils/protectedRoute';

const BORoute = ({ match }) => {
  return (
    <div>
      <PrivateRoute exact path={`${match.url}`} component={BackOffice} />
      <PrivateRoute exact path={`${match.url}/:subjectId`} component={BOUnitList} />
    </div>
  )
}

export default BORoute;
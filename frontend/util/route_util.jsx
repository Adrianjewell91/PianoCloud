//May delete this because current I don't use it and don't intend to usei t. F

import React from 'react';
import {connect } from 'react-redux';
import {Route, Redirect, withRouter} from "react-router-dom";

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)}
}

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    )} />
);


export const ProtectedRoute = withRouter(connect(mapStateToProps,null)(Protected));

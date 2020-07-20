import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mstp = state => ({
  loggedIn: Boolean(state.auth.user)
});

const auth = ({ loggedIn, path, component: Component }) => (
  <Route path={path} render={props => loggedIn ? <Redirect to='/' /> : <Component {...props} /> } />
);

const protect = ({ loggedIn, path, component: Component }) => (
  <Route path={path} render={props => loggedIn ? <Component {...props} /> : <Redirect to='/login' /> } />
);

export const AuthRoute = withRouter(connect(mstp)(auth));
export const ProtectedRoute = withRouter(connect(mstp)(protect));

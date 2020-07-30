import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const AuthRoute = ({ path, component: Component }) => {
  const { user } = useContext(UserContext);
  const loggedIn = Boolean(user);

  return (
    <Route
      path={path}
      render={props => loggedIn ? <Redirect to='/' /> : <Component {...props} />}
    />
  );
};

export const ProtectedRoute = ({ path, component: Component }) => {
  const { user } = useContext(UserContext);
  const loggedIn = Boolean(user);

  return (
    <Route
      path={path}
      render={props => loggedIn ? <Component {...props} /> : <Redirect to='/login' />}
    />
  );
};

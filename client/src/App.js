import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './utils/route';
import Login from './pages/Login';
import Home from './pages/Home';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthRoute path='/login' component={Login} />
        <Route path='/test_page' component={TestPage} />
        <ProtectedRoute path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;

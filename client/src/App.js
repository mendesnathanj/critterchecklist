import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './utils/route';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthRoute path='/login' component={Login} />
        <ProtectedRoute path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;

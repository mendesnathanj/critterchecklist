import React from 'react';
import { Switch } from 'react-router-dom';
import Login from './pages/Login';
import { AuthRoute, ProtectedRoute } from './utils/routes';
import Bugs from './pages/Bugs';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <AuthRoute path="/login" component={Login} />
        <ProtectedRoute path="/bugs" component={Bugs} />
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

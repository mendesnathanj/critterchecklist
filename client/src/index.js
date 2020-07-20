import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from "./store/store";
import getPreloadedState from './utils/preloadedState';

localStorage.removeItem('token');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(getPreloadedState())}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

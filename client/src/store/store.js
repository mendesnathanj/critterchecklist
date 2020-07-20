import { createStore, applyMiddleware } from 'redux';
import root from '../reducers/root';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore(preloadedState = {}) {
  return createStore(root, preloadedState, applyMiddleware(thunk, logger));
};



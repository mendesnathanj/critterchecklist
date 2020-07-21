import { combineReducers } from 'redux';
import auth from './auth';
import bugs from './bugs';

const root = combineReducers({
  auth,
  bugs
});

export default root;

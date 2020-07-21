import { RECEIVE_USER, LOGOUT_USER } from '../actions/auth';

export default function auth(state = { user: null }, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      const user = action.payload.user;
      localStorage.setItem('token', action.payload.token);

      return Object.assign({}, { user });
    case LOGOUT_USER:
      localStorage.removeItem('token');

      return { user: null };
    default:
      return state;
  }
}

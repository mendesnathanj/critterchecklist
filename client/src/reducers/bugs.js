import { RECEIVE_BUGS } from "../actions/bugs";

export default function bugs(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BUGS:
      const nextState = { ...state, ...action.payload.bugs };
      return nextState;
    default:
      return state;
  }
}

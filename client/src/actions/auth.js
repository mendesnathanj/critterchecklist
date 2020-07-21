import { get, post } from 'axios';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const login3 = user => dispatch => (
  fetch(`${process.env.REACT_APP_API_URL}/api/v1/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  })
  .then(res => {
    return res.json()
  })
  .then(json => {
    dispatch(receiveUser(json))
  })
);

export const login = user => async dispatch => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user }),
  });

  const payload = await res.json();

  return await dispatch(receiveUser(payload));
}

const loginUser = (user) => post(`${process.env.REACT_APP_API_URL}/api/v1/login`, { user })

export const login1 = user => dispatch => (
  loginUser(user)
  .then(payload => dispatch(receiveUser(payload.data)))
);

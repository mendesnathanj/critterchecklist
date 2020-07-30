import axios from 'axios';

export const loginUser = user =>
  axios.post(`${process.env.REACT_APP_API_URL}/api/v1/login`, { user })

export const logoutUser = () =>
  axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/logout`)

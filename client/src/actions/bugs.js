import Axios from "axios";
import normalize from 'json-api-normalizer';

export const RECEIVE_BUGS = 'RECEIVE_BUGS';

const receiveBugs = payload => ({
  type: RECEIVE_BUGS,
  payload
});


export const fetchBugs = () => dispatch => (
  Axios.get(`${process.env.REACT_APP_API_URL}/api/v1/bugs`)
  .then(payload => dispatch(receiveBugs(normalize(payload.data))))
)

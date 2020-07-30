import axios from 'axios';
import { mapParams } from '../utils/functions';

export const fetchBugs = (params = {}) =>
  axios.get(`${process.env.REACT_APP_API_URL}/api/v1/bugs${mapParams(params)}`)

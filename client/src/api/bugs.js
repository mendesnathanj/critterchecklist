import axios from 'axios';
import { mapParams, apiUrl } from '../utils/functions';

export const fetchBugs = (params = {}) =>
  axios.get(apiUrl(`/api/v1/bugs${mapParams(params)}`))

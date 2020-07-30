import axios from 'axios';
import { apiUrl } from '../utils/functions';


export const loginUser = user => axios.post(apiUrl('/api/v1/login'), { user });

export const logoutUser = () => axios.delete(apiUrl('/api/v1/logout'));

import { BASE_URL } from '@constants/endpoints';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default api;

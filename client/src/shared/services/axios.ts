import COOKIES from '@constants/cookies';
import { BASE_URL } from '@constants/endpoints';
import axios from 'axios';
import { parseCookies } from 'nookies';

const getAPIClient = (context?: any) => {
  const { [COOKIES.NAME]: token } = parseCookies(context);

  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
};

export default getAPIClient;

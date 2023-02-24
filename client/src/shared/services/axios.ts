import COOKIES from '@constants/cookies';
import { BASE_URL } from '@constants/endpoints';
import axios from 'axios';
import { parseCookies } from 'nookies';

const getAPIClient = (context?: any) => {
  const { [COOKIES.TOKEN_NAME]: token } = parseCookies(context);

  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-type': 'application/json',
      Cookie: `${COOKIES.TOKEN_NAME}=${token}`,
    },
  });

  return api;
};

export default getAPIClient;

import ENDPOINTS from '@constants/endpoints';
import {
  ILoginData,
  ILoginResponse,
  IRegisterData,
  IRegisterResponse,
} from '@interfaces/authInterfaces';
import { AxiosResponse } from 'axios';

import api from '../api';

export const login = async ({ email, password }: ILoginData) => {
  try {
    const response = await api.post<ILoginData, AxiosResponse<ILoginResponse>>(
      ENDPOINTS.LOGIN,
      {
        email,
        password,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const register = async ({ email, name, password }: IRegisterData) => {
  try {
    const response = await api.post<
      IRegisterData,
      AxiosResponse<IRegisterResponse>
    >(ENDPOINTS.REGISTER, {
      email,
      name,
      password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

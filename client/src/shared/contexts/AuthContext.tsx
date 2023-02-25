import { createContext, useContext, useEffect, useState } from 'react';

import Router from 'next/router';

import COOKIES from '@constants/cookies';
import { NEXT_BASE_URL } from '@constants/endpoints';
import PATHS from '@constants/paths';
import {
  ILoginData,
  ILoginResponse,
  IRegisterData,
  IRegisterResponse,
  IUser,
} from '@interfaces/authInterfaces';
import { errorHandling } from '@shared/utils/errorsUtils';
import axios, { AxiosResponse } from 'axios';
import _isNull from 'lodash/isNull';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

interface ISignInData {
  email: string;
  password: string;
}

interface IAuthContext {
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (data: ISignInData) => Promise<void>;
  signOut: () => void;
  signUp: (data: IRegisterData) => Promise<void>;
  user: IUser | null;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: any) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = _isNull(user);

  useEffect(() => {
    const { [COOKIES.TOKEN_NAME]: token } = parseCookies();

    if (token) {
      /* TODO: get user information */
    }
  }, []);

  const signIn = async ({ email, password }: ILoginData) => {
    setLoading(true);

    try {
      const {
        data: { token, user },
      } = await axios.post<ILoginData, AxiosResponse<ILoginResponse>>(
        `${NEXT_BASE_URL}/login`,
        {
          email,
          password,
        }
      );

      setCookie(undefined, COOKIES.TOKEN_NAME, token, {
        maxAge: 60 * 60 * 0.5, // 30 minutes
      });

      setUser(user);

      Router.push(PATHS.CUSTOMERS());
    } catch (error) {
      errorHandling(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    destroyCookie(undefined, COOKIES.TOKEN_NAME);

    Router.push(PATHS.LOGIN);
  };

  const signUp = async ({ email, name, password }: IRegisterData) => {
    setLoading(true);

    try {
      await axios.post<IRegisterData, AxiosResponse<IRegisterResponse>>(
        `${NEXT_BASE_URL}/register`,
        {
          email,
          name,
          password,
        }
      );

      Router.push(PATHS.LOGIN);
    } catch (error) {
      errorHandling(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, signIn, signOut, signUp, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

import COOKIES from '@constants/cookies';
import ENDPOINTS from '@constants/endpoints';
import {
  ICreateCustomerResponse,
  ICustomer,
  ICustomerBase,
} from '@interfaces/customersInterfaces';
import {
  IPaymentMethod,
  IPaymentMethodsCount,
} from '@interfaces/paymentMethodsInterfaces';
import api from '@services/api';
import getAPIClient from '@services/axios';
import { AxiosResponse } from 'axios';

export const createCustomer = async (
  token: string,
  {
    Location: { latitude, longitude, country, street1 },
    email,
    name,
    telephone,
  }: ICustomerBase
) => {
  try {
    const response = await api.post<
      ICustomerBase,
      AxiosResponse<ICreateCustomerResponse>
    >(
      ENDPOINTS.CUSTOMERS(),
      {
        location: { latitude, longitude, country, street1 },
        email,
        name,
        telephone,
      },
      {
        headers: {
          Cookie: `${COOKIES.TOKEN_NAME}=${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCustomers = async (context: any) => {
  const apiClient = getAPIClient(context);

  try {
    const response = await apiClient.get<AxiosResponse<ICustomerBase[]>>(
      ENDPOINTS.CUSTOMERS()
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCustomerById = async (context: any, id?: string) => {
  const apiClient = getAPIClient(context);

  try {
    const response = await apiClient.get<AxiosResponse<ICustomer>>(
      ENDPOINTS.CUSTOMERS(id)
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCustomerPaymentMethods = async (context: any, id: string) => {
  const apiClient = getAPIClient(context);

  try {
    const response = await apiClient.get<AxiosResponse<IPaymentMethod[]>>(
      ENDPOINTS.CUSTOMER_PAYMENT_METHODS(id)
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCustomerPaymentMethodsCount = async (
  context: any,
  id: string
) => {
  const apiClient = getAPIClient(context);

  try {
    const response = await apiClient.get<AxiosResponse<IPaymentMethodsCount>>(
      ENDPOINTS.CUSTOMER_PAYMENT_METHODS_COUNT(id)
    );
    return response;
  } catch (error) {
    return error;
  }
};

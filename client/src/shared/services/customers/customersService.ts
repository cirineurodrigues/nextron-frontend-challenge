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
import { AxiosResponse } from 'axios';

export const createCustomer = async ({
  location: { latitude, longitude, country, street1 },
  email,
  name,
  telephone,
}: ICustomerBase) => {
  try {
    const response = await api.post<
      ICustomerBase,
      AxiosResponse<ICreateCustomerResponse>
    >(ENDPOINTS.CUSTOMERS(), {
      location: { latitude, longitude, country, street1 },
      email,
      name,
      telephone,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getCustomers = async () => {
  try {
    const response = await api.get<AxiosResponse<ICustomer[]>>(
      ENDPOINTS.CUSTOMERS()
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCustomerById = async (id: string) => {
  try {
    const response = await api.get<AxiosResponse<ICustomer>>(
      ENDPOINTS.CUSTOMERS(id)
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCustomerPaymentMethods = async (id: string) => {
  try {
    const response = await api.get<AxiosResponse<IPaymentMethod[]>>(
      ENDPOINTS.CUSTOMER_PAYMENT_METHODS(id)
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCustomerPaymentMethodsCount = async (id: string) => {
  try {
    const response = await api.get<AxiosResponse<IPaymentMethodsCount>>(
      ENDPOINTS.CUSTOMER_PAYMENT_METHODS_COUNT(id)
    );
    return response;
  } catch (error) {
    return error;
  }
};

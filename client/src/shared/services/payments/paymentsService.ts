import COOKIES from '@constants/cookies';
import ENDPOINTS from '@constants/endpoints';
import {
  IAddPaymentMethodResponse,
  IPayment,
  IPaymentMethod,
} from '@interfaces/paymentMethodsInterfaces';
import api from '@services/api';
import getAPIClient from '@services/axios';
import { AxiosResponse } from 'axios';

export const addPaymentMethod = async (
  token: string,
  {
    customerId,
    methodType,
    cardBin,
    cardLastFour,
    expiryMonth,
    expiryYear,
    eWallet,
    nameOnCard,
    billingAddress: { latitude, longitude, country, street1 },
  }: IPaymentMethod
) => {
  try {
    const response = await api.post<AxiosResponse<IAddPaymentMethodResponse>>(
      ENDPOINTS.PAYMENT_METHODS(),
      {
        customerId,
        methodType,
        cardBin,
        cardLastFour,
        expiryMonth,
        expiryYear,
        eWallet,
        nameOnCard,
        billingAddress: { latitude, longitude, country, street1 },
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

export const getPayments = async (context: any) => {
  const apiClient = getAPIClient(context);

  try {
    const response = await apiClient.get<AxiosResponse<IPayment[]>>(
      ENDPOINTS.PAYMENT_METHODS()
    );
    return response;
  } catch (error) {
    return error;
  }
};

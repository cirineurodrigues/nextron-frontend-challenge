import ENDPOINTS from '@constants/endpoints';
import { IPayment } from '@interfaces/paymentMethodsInterfaces';
import getAPIClient from '@services/axios';
import { AxiosResponse } from 'axios';

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

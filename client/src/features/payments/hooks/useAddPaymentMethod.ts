import { useState } from 'react';

import { useRouter } from 'next/router';

import COOKIES from '@constants/cookies';
import { NEXT_BASE_URL } from '@constants/endpoints';
import PATHS from '@constants/paths';
import { IPaymentMethod } from '@interfaces/paymentMethodsInterfaces';
import { errorHandling } from '@shared/utils/errorsUtils';
import axios from 'axios';
import { parseCookies } from 'nookies';

import { IFormValues } from '../components/AddPaymentMethodForm/AddPaymentMethodForm';

const useAddPaymentMethod = (customerID: number) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const prepareCustomerData = (data: IFormValues): IPaymentMethod => {
    return {
      customerId: customerID,
      methodType: data.methodType,
      cardBin: data.cardBin,
      cardLastFour: data.cardLastFour,
      expiryMonth: data.expiryMonth,
      expiryYear: data.expiryYear,
      eWallet: data.eWallet,
      nameOnCard: data.nameOnCard,
      billingAddress: {
        latitude: data.latitude,
        longitude: data.longitude,
        country: data.country,
        street1: data.street1,
      },
    };
  };

  const AddPaymentMethod = async (data: IFormValues): Promise<void> => {
    const { [COOKIES.TOKEN_NAME]: token } = parseCookies();

    setLoading((state) => !state);

    const preparedData = prepareCustomerData(data);

    try {
      await axios.post(`${NEXT_BASE_URL}/payments`, {
        token,
        ...preparedData,
      });

      router.push(PATHS.CUSTOMERS(customerID));
    } catch (error) {
      errorHandling(error);
    } finally {
      setLoading((state) => !state);
    }
  };

  return { AddPaymentMethod, loading };
};

export default useAddPaymentMethod;

import { useState } from 'react';

import { useRouter } from 'next/router';

import COOKIES from '@constants/cookies';
import { NEXT_BASE_URL } from '@constants/endpoints';
import PATHS from '@constants/paths';
import { ICustomerBase } from '@interfaces/customersInterfaces';
import { errorHandling } from '@shared/utils/errorsUtils';
import axios from 'axios';
import { parseCookies } from 'nookies';

import { IFormValues } from '../components/CreateCustomerForm/CreateCustomerForm';

const useCreateCustomer = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const prepareCustomerData = (data: IFormValues): ICustomerBase => {
    return {
      Location: {
        latitude: data.latitude,
        longitude: data.longitude,
        country: data.country,
        street1: data.street1,
      },
      email: data.email,
      name: data.name,
      telephone: data.telephone,
    };
  };

  const createCustomer = async (data: IFormValues): Promise<void> => {
    const { [COOKIES.TOKEN_NAME]: token } = parseCookies();

    setLoading((state) => !state);

    const preparedData = prepareCustomerData(data);

    try {
      await axios.post(`${NEXT_BASE_URL}/customers`, {
        token,
        ...preparedData,
      });

      router.push(PATHS.CUSTOMERS);
    } catch (error) {
      errorHandling(error);
    } finally {
      setLoading((state) => !state);
    }
  };

  return { createCustomer, loading };
};

export default useCreateCustomer;

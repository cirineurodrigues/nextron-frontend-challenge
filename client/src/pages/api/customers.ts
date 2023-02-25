import type { NextApiRequest, NextApiResponse } from 'next';

import { METHODS, STATUS_CODES } from '@constants/http';
import MESSAGES from '@constants/messages';
import { ICreateCustomerResponse } from '@interfaces/customersInterfaces';
import CustomersService from '@services/customers';
import { AxiosResponse } from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: {
      token,
      Location: { latitude, longitude, country, street1 },
      email,
      name,
      telephone,
    },
    method,
  } = req;

  if (method !== METHODS.POST) {
    return res
      .status(STATUS_CODES.METHOD_NOT_ALLOWED)
      .json({ errors: [MESSAGES.METHOD_NOT_ALLOWED] });
  }

  try {
    const { data, status } = (await CustomersService.createCustomer(token, {
      Location: { latitude, longitude, country, street1 },
      email,
      name,
      telephone,
    })) as AxiosResponse<ICreateCustomerResponse, any>;

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ errors: [MESSAGES.REQUEST_FAILED] });
  }
}

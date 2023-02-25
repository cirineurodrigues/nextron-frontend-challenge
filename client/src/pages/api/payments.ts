import type { NextApiRequest, NextApiResponse } from 'next';

import { METHODS, STATUS_CODES } from '@constants/http';
import MESSAGES from '@constants/messages';
import { IAddPaymentMethodResponse } from '@interfaces/paymentMethodsInterfaces';
import PaymentsService from '@services/payments';
import { AxiosResponse } from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: {
      token,
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
    method,
  } = req;

  if (method !== METHODS.POST) {
    return res
      .status(STATUS_CODES.METHOD_NOT_ALLOWED)
      .json({ errors: [MESSAGES.METHOD_NOT_ALLOWED] });
  }

  try {
    const { data, status } = (await PaymentsService.addPaymentMethod(token, {
      customerId,
      methodType,
      cardBin,
      cardLastFour,
      expiryMonth,
      expiryYear,
      eWallet,
      nameOnCard,
      billingAddress: { latitude, longitude, country, street1 },
    })) as AxiosResponse<IAddPaymentMethodResponse, any>;

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ errors: [MESSAGES.REQUEST_FAILED] });
  }
}

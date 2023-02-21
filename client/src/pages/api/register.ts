import type { NextApiRequest, NextApiResponse } from 'next';

import { METHODS, STATUS_CODES } from '@constants/http';
import MESSAGES from '@constants/messages';
import { IRegisterResponse } from '@interfaces/authInterfaces';
import AuthService from '@shared/services/auth';
import { AxiosResponse } from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: { email, name, password },
    method,
  } = req;

  if (method !== METHODS.POST) {
    return res
      .status(STATUS_CODES.METHOD_NOT_ALLOWED)
      .json({ errors: [MESSAGES.METHOD_NOT_ALLOWED] });
  }

  try {
    const { data, status } = (await AuthService.register({
      email,
      name,
      password,
    })) as AxiosResponse<IRegisterResponse, any>;

    return res.status(status).json(data);
  } catch {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ errors: [MESSAGES.REQUEST_FAILED] });
  }
}

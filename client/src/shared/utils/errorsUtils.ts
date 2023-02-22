import MESSAGES from '@constants/messages';
import { IError } from '@interfaces/errorInterfaces';
import { AxiosError, isAxiosError } from 'axios';

import { notifyError } from './notifyUtils';

export const errorHandling = (error: unknown | AxiosError) => {
  if (isAxiosError(error)) {
    const { response } = error as AxiosError;

    const { errors, msg } = response?.data as IError;

    if (msg) {
      notifyError(msg);
    } else {
      errors?.map((error) => notifyError(error));
    }
  } else {
    notifyError(MESSAGES.REQUEST_FAILED);
  }
};

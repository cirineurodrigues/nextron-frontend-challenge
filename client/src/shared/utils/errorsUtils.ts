import MESSAGES from '@constants/messages';
import { AxiosError, isAxiosError } from 'axios';
import _get from 'lodash/get';

import { notifyError } from './notifyUtils';

export const errorHandling = (error: unknown | AxiosError) => {
  if (isAxiosError(error)) {
    const { response } = error as AxiosError;

    const msg = _get(response, 'data', '') as string;
    const errors = _get(response, 'data', []) as string[];

    if (msg) {
      notifyError(msg);
    } else {
      errors?.map((error) => notifyError(error));
    }
  } else {
    notifyError(MESSAGES.REQUEST_FAILED);
  }
};

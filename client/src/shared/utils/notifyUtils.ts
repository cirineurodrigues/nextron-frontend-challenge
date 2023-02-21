import { toast } from 'react-toastify';

export const notifyError = (msg: string) =>
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });

export const notifySuccess = (msg: string) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

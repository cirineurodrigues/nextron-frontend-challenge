import ENDPOINTS from '@constants/endpoints';
import api from '@services/api';

export const getCustomers = async () => {
  try {
    const response = await api.get(ENDPOINTS.CUSTOMERS);
    return response;
  } catch (error) {
    return error;
  }
};

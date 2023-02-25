const PATHS = {
  ADD_PAYMENT_METHOD: (customerID?: string) => `/payments/${customerID}/add`,
  CREATE_CUSTOMER: '/customers/create',
  CUSTOMERS: (customerID?: string | number) =>
    customerID ? `/customers/${customerID}` : '/customers',
  LOGIN: '/login',
  PAYMENTS: '/payments',
  REGISTER: '/register',
  ROOT: '/',
};

export default PATHS;

import _isUndefined from 'lodash/isUndefined';

export const BASE_URL = 'http://api:8081';

export const NEXT_BASE_URL = 'http://localhost:3001/api';

const ENDPOINTS = {
  /**
   *
   * @param id
   *
   * GET /customers
   * get all customers
   *
   * GET /customers/:id
   * get a specific customer
   *
   * GET /customers/:id/paymentmethods
   * get all payment methods for a customer
   *
   * GET /customers/:id/paymentmethods/count
   * get a count of all payment methods for a customer
   *
   * POST /customers
   * create or update a customer
   * required fields:
   * customerId (string)
   *
   */
  CUSTOMERS: (id?: string) =>
    _isUndefined(id) ? '/customers' : `/customers/${id}`,
  /**
   *
   * @param id
   *
   * GET /customers/:id/paymenthmethods
   *
   * get user payment method info
   *
   */
  CUSTOMER_PAYMENT_METHODS: (id: string) => `/customers/${id}/paymentmethods`,
  /**
   *
   * @param id
   *
   * GET /customers/:id/paymentmethods/count
   *
   * get a count of all payment methods for a customer
   *
   */
  CUSTOMER_PAYMENT_METHODS_COUNT: (id: string) =>
    `/customers/${id}/paymentmethods/count`,
  /**
   *
   * GET /login
   *
   * get user info and token
   *
   */
  LOGIN: '/login',
  /**
   *
   * @param id
   *
   * GET /paymentmethods
   * gets all payment methods in the system
   *
   * GET /paymentmethods/:id
   * gets a specific payment method
   *
   * POST /paymentmethods
   * creates new payment methods for a customer
   *
   */
  PAYMENT_METHODS: (id: string) =>
    _isUndefined(id) ? '/paymentmethods' : `/paymentmethods/${id}`,
  /**
   *
   * POST /register
   * create new user
   *
   */
  REGISTER: '/register',
  /**
   *
   * GET /session
   *
   * get user info
   *
   */
  SESSION: '/session',
};

export default ENDPOINTS;

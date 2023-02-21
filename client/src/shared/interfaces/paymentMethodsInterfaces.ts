export interface IBillingAddress {
  country: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  addresseeName: string;
  street1: string;
  street2: string;
  neighbourhood: string;
  zone: string;
  city: string;
  region: string;
  poBoxNumber: string;
}

export interface IPaymentMethod {
  methodType: string;
  paymentMethodId: string;
  instrumentId: string;
  cardBin: string;
  cardLastFour: string;
  expiryMonth: number;
  expiryYear: number;
  eWallet: string;
  nameOnCard: string;
  billingAddress: IBillingAddress;
}

export interface IPaymentMethodsCount {
  count: number;
}

export interface IPayment {
  timestamp: number;
  customerId: string;
  paymentMethod: IPaymentMethod;
  successfulRegistration: boolean;
  registrationTime: number;
  lastVerified: number;
}

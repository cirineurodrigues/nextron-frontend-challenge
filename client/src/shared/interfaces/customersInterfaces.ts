export interface ILocation {
  country: string;
  postalCode?: string;
  latitude: number;
  longitude: number;
  addresseeName?: string;
  street1: string;
  street2?: string;
  neighbourhood?: string;
  zone?: string;
  city?: string;
  region?: string;
  poBoxNumber?: string;
}

export interface ICustomerBase {
  customerID?: string;
  Location: ILocation;
  email: string;
  name: string;
  telephone: string;
  registration_time?: string;
}

export interface ICustomer extends ICustomerBase {
  registrationTime: number;
  emailVerifiedTime: number;
  familyName: string;
  givenName: string;
  telephoneVerifiedTime: number;
  telephoneCountry: string;
}

export interface ICreateCustomerResponse {
  customerID: string;
}

export interface IUser {
  password: string;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  msg: string;
  success: boolean;
  token: string;
  user: IUser;
}

export interface IRegisterData {
  email: string;
  name: string;
  password: string;
}

export interface IRegisterResponse {
  msg: string;
  success: boolean;
}

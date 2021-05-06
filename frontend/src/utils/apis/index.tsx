import { GET, POST } from '../axiosService';

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

// Authentication
export const authenticationSignIn = payload => {
  //@ts-ignore
  return POST(`${ENDPOINT}/auth/login`, payload);
};

// Authentication
export const authenticationSendEmail = payload => {
  //@ts-ignore
  return POST(`${ENDPOINT}/nodemail/send`, payload);
};

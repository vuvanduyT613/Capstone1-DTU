import { GET, GET_TOKEN, POST } from '../axiosService';

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

// Authentication
export const authenticationSignIn = payload => {
  return POST(`${ENDPOINT}/auth/login`, payload);
};

export const authenticationSendEmail = payload => {
  return POST(`${ENDPOINT}/nodemail/send`, payload);
};

export const authenticationSignUp = payload => {
  return POST(`${ENDPOINT}/auth/register`, payload);
};

// Usser
export const userGetAll = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(`${ENDPOINT}/user`, config);
};

import { GET, GET_TOKEN, POST, POST_TOKEN } from '../axiosService';

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const COUNTRY = process.env.REACT_APP_API_ADDRESS;

console.log(COUNTRY);
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

export const authenticationRefreshToken = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return POST_TOKEN(
    `${ENDPOINT}/auth/refresh-tokens`,
    {
      refreshToken: payload.refresh,
    },
    config,
  );
};

export const authenticationForgot = payload => {
  return POST(`${ENDPOINT}/auth/forgot-password`, payload);
};

export const authenticationReset = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return POST_TOKEN(
    `${ENDPOINT}/auth/reset-password?token=${payload.token}`,
    {
      password: payload.password,
    },
    config,
  );
};
// Usser
export const userGetAll = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(`${ENDPOINT}/users`, config);
};

//get country
export const countryAll = () => {
  return GET(`${COUNTRY}`);
};

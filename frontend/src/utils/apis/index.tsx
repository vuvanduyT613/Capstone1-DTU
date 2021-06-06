import Cookies from 'js-cookie';
import { GET, GET_TOKEN, POST, POST_TOKEN, PATH_TOKEN, DELETE_TOKEN } from '../axiosService';

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const COUNTRY = process.env.REACT_APP_API_ADDRESS;

console.log(COUNTRY);
// Authentication
export const authenticationSignIn = payload => {
  return POST(`${ENDPOINT}/auth/login`, payload);
};

export const authenticationSignInDoctor = payload => {
  return POST(`${ENDPOINT}/auth/login/doctor`, payload);
};

export const authenticationSendEmail = payload => {
  return POST(`${ENDPOINT}/nodemail/send`, payload);
};

export const authenticationSignUp = payload => {
  return POST(`${ENDPOINT}/auth/register`, payload);
};

export const authenticationSignUpDoctor = payload => {
  return POST(`${ENDPOINT}/doctors/v1`, payload);
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
  return GET_TOKEN(`${ENDPOINT}/users?limit=5&page=${payload.page}`, config);
};

export const userUpdateById = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return PATH_TOKEN(`${ENDPOINT}/users/${payload.id}`, payload.data, config);
};

export const userDeleteById = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return DELETE_TOKEN(`${ENDPOINT}/users/${payload.id}`, config);
};

// Doctor
export const doctorGetAll = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(
    `${ENDPOINT}/doctors/v1?userName=${payload.userName ? payload.userName : ' '}&limit=${
      payload.limit ? payload.limit : 5
    } &page=${payload.page}`,
    config,
  );
};

export const doctorGetAppointment = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(
    `${ENDPOINT}/appointments/v1?doctorID=${Cookies.get('user_id')}&limit=${
      payload.limit ? payload.limit : 5
    } &page=${payload.page}`,
    config,
  );
};

export const doctorGetSpecialize = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(
    `${ENDPOINT}/doctors/v1?specialize=${payload.userName ? payload.userName : ' '}&limit=${
      payload.limit ? payload.limit : 5
    } &page=${payload.page}`,
    config,
  );
};

export const doctorUpdateById = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return PATH_TOKEN(`${ENDPOINT}/doctors/v1?id=${payload.id}`, payload.data, config);
};

export const doctorDeleteById = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return DELETE_TOKEN(`${ENDPOINT}/doctors/v1?id=${payload.id}`, config);
};

//Appointment
export const appointmentGetAll = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(`${ENDPOINT}/appointments/v1?limit=10000`, config);
};

export const appointmentGetById = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(`${ENDPOINT}/appointments/v1?limit=5&page=${payload.page}`, config);
};

export const appointmentCreate = payload => {
  console.log(payload);
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return POST_TOKEN(
    `${ENDPOINT}/appointments/v1`,
    {
      userID: payload.userID,
      doctorID: payload.doctorID,
      time: payload.time,
      status: payload.status,
      price: payload.price,
    },
    config,
  );
};

export const appointmentUpdateById = payload => {
  console.log(payload);
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return PATH_TOKEN(
    `${ENDPOINT}/appointments/v1?id=${payload.id}`,
    {
      userID: payload.userID,
      doctorID: payload.doctorID,
      time: payload.time,
      status: payload.status,
      payment: payload.payment,
    },
    config,
  );
};

export const appointmentDeleteById = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return DELETE_TOKEN(`${ENDPOINT}/appointments/v1?id=${payload.id}`, config);
};

export const appointmentEmail = payload => {
  return POST(`${ENDPOINT}/nodemail/appointment`, payload);
};

//clinic
export const clinicGetAll = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(`${ENDPOINT}/clinics/v1?limit=10000&page=1`, config);
};

export const clinicGetById = payload => {
  console.log(payload);
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(
    `${ENDPOINT}/clinics/v1?nameClinic=${payload.nameClinic ? payload.nameClinic : ' '}&city=${
      payload.query ? payload.query : ' '
    }&limit=6&page=${payload.page}`,
    config,
  );
};

export const clinicCreate = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return POST_TOKEN(`${ENDPOINT}/clinics/v1`, payload.data, config);
};

export const clinicUpdate = payload => {
  console.log(payload.id);
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return PATH_TOKEN(`${ENDPOINT}/clinics/v1?id=${payload.id}`, payload.data, config);
};

export const clinicDelete = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return DELETE_TOKEN(`${ENDPOINT}/clinics/v1?id=${payload.id}`, config);
};

//delivery
export const deliveryGetByUserId = payload => {
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(
    `${ENDPOINT}/appointments/v1?userID=${payload.userID}&limit=5&page=${payload.page}`,
    config,
  );
};

//get country
export const countryAll = () => {
  return GET(`${COUNTRY}`);
};

//utils
export const getById = payload => {
  console.log(payload);
  const config = {
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return GET_TOKEN(`${ENDPOINT}/doctors/v1?id=${payload.id}`, config);
};

export const getAnalysis = () => {
  return GET(`${ENDPOINT}/analysis`);
};

export const getAnalysisDoctor = () => {
  return GET(`${ENDPOINT}/analysis/doctor?id=${Cookies.get('user_id')}`);
};

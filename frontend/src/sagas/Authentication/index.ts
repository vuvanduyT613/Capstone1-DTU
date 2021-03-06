import { call, put } from 'redux-saga/effects';
import {
  UPDATE_FIELD_SIGN_IN,
  UPDATE_FIELD_SIGN_UP_SEND_EMAIL,
  UPDATE_FIELD_SIGN_IN_ERROR,
  UPDATE_FIELD_SIGN_UP,
  GET_COUNTRY,
} from 'store/reducers/Authetication/actionTypes';
import Cookies from 'js-cookie';
import {
  authenticationSignIn,
  authenticationSendEmail,
  authenticationSignUp,
  countryAll,
  authenticationForgot,
  authenticationReset,
  authenticationSignInDoctor,
  authenticationSignUpDoctor,
} from 'utils/apis';
import { toast } from 'react-toastify';

const expires = process.env.REACT_APP_EXPIRES_COOKIE;

export function* signIn(action) {
  try {
    const { status, data } = yield call(
      action.payload.check === false ? authenticationSignIn : authenticationSignInDoctor,
      { email: action.payload.email, password: action.payload.password },
    );
    console.log(data);

    if (status === 200) {
      Cookies.set('role', data.user !== undefined ? data.user.role : data.doctor.role, expires);
      Cookies.set('email', action.payload.email, expires);
      Cookies.set('password', action.payload.password, expires);
      Cookies.set('access_token', data.tokens.access.token);
      Cookies.set('refresh_token', data.tokens.refresh.token, expires);
      Cookies.set(
        'user_name',
        `${data.user !== undefined ? data.user.fistName : data.doctor.fistName} ${
          data.user !== undefined ? data.user.lastName : data.doctor.lastName
        }`,
        expires,
      );
      Cookies.set('user_id', `${data.user ? data.user.id : data.doctor.id}`, expires);
      Cookies.set('user_phone', `${data.user ? data.user.phone : data.doctor.phone}`, expires);
      Cookies.set(
        'user_date',
        `${data.user ? data.user.dateOfBirth : data.doctor.dateOfBirth}`,
        expires,
      );
      Cookies.set('user_avatar', `${data.user ? data.user.avatar : data.doctor.avatar}`, expires);

      yield put({
        type: UPDATE_FIELD_SIGN_IN,
        payload: {
          email: data.user ? data.user.email : data.doctor.email,
          password: action.payload.password,
          role: data.user ? data.user.role : data.doctor.role,
          status: status,
        },
      });
    }
    return;
  } catch (err) {
    console.log(err);

    toast.error('Incorrect email or password');
    yield put({
      type: UPDATE_FIELD_SIGN_IN_ERROR,
      payload: err,
    });
  }
}

export function* signUp(action) {
  try {
    const userName = `${action.payload.fistName}${action.payload.lastName}`;
    const form = new FormData();
    form.append('userName', action.payload.userName ? action.payload.userName : userName);
    form.append('email', action.payload.email);
    form.append('password', action.payload.changepassword);
    form.append('fistName', action.payload.fistName);
    form.append('lastName', action.payload.lastName);
    form.append('dateOfBirth', action.payload.dateOfBirth);
    form.append('country', action.payload.country);
    form.append('city', action.payload.city);
    form.append('address', action.payload.address);
    form.append('postalCode', action.payload.postalCode);
    form.append('phone', action.payload.phone);
    form.append('avatar', action.payload.avatar);
    if (action.payload.role.value !== 'user') {
      form.append('level', action.payload.level);
      form.append('price', action.payload.price);
      form.append('detail', action.payload.detail);
      form.append('idClinic', action.payload.idClinic);
      form.append('specialize', action.payload.specialize);
    }
    const { status } = yield call(
      action.payload.role.value === 'user' ? authenticationSignUp : authenticationSignUpDoctor,
      form,
    );
    if (status === 201) {
      Cookies.set('email', action.payload.email, expires);
      Cookies.set('password', action.payload.password, expires);
      toast.success(`Add ${action.payload.role.value} success.!`);
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          email: action.payload.email,
          password: action.payload.password,
          step: 0,
        },
      });
    }
  } catch (err) {
    toast.error('Email already in use.!');
    yield put({
      type: UPDATE_FIELD_SIGN_UP,
      payload: {
        step: 1,
      },
    });
  }
}

export function* sendEmail(action) {
  try {
    const { status, data } = yield call(authenticationSendEmail, action.payload);
    if (status === 200) {
      yield put({
        type: UPDATE_FIELD_SIGN_UP_SEND_EMAIL,
        payload: {
          email: action.payload.email,
          code: data.code,
        },
      });
    }
  } catch (err) {
    yield put({
      type: UPDATE_FIELD_SIGN_IN_ERROR,
      payload: err,
    });
  }
}

export function* getCountry() {
  try {
    const { data } = yield call(countryAll);
    yield put({
      type: GET_COUNTRY,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_FIELD_SIGN_IN_ERROR,
      payload: err,
    });
  }
}

export function* forgot(action) {
  try {
    const { status } = yield call(authenticationForgot, action.payload);
    if (status === 204) {
      Cookies.set('forgot_email', action.payload.email);
      window.location.reload();
    }
  } catch (err) {
    yield put({
      type: UPDATE_FIELD_SIGN_IN_ERROR,
      payload: err,
    });
  }
}

export function* reset(action) {
  try {
    const { status } = yield call(authenticationReset, {
      token: Cookies.get('forgot_token'),
      password: action.payload.password,
    });
    if (status === 204) {
      Cookies.remove('forgot_token');
      window.location.reload();
    }
  } catch (err) {
    yield put({
      type: UPDATE_FIELD_SIGN_IN_ERROR,
      payload: err,
    });
  }
}

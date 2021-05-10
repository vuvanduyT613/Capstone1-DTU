import { call, put } from 'redux-saga/effects';
import {
  UPDATE_FIELD_SIGN_IN,
  UPDATE_FIELD_SIGN_UP_SEND_EMAIL,
  UPDATE_FIELD_SIGN_IN_ERROR,
  UPDATE_FIELD_SIGN_UP,
} from 'store/reducers/Authetication/actionTypes';
import Cookies from 'js-cookie';
import {
  authenticationSignIn,
  authenticationSendEmail,
  authenticationSignUp,
} from 'utils/apis';
import { toast } from 'react-toastify';

export function* signIn(action) {
  try {
    const { status, data } = yield call(authenticationSignIn, action.payload);
    if (status === 200) {
      Cookies.set('role', data.user.role);
      Cookies.set('email', action.payload.email);
      Cookies.set('password', action.payload.password);
      Cookies.set('access_token', data.tokens.access.token);
      Cookies.set('access_refresh', data.tokens.refresh.token);
      yield put({
        type: UPDATE_FIELD_SIGN_IN,
        payload: {
          email: data.user.email,
          password: action.payload.password,
          role: data.user.role,
          status: status,
        },
      });
    }
    return;
  } catch (err) {
    toast.error('Incorrect email or password');
    yield put({
      type: UPDATE_FIELD_SIGN_IN_ERROR,
      payload: err,
    });
  }
}
//refresh token when 10 minute
setTimeout(()=> {
        
}, 600000)

export function* signUp(action) {
  try {
    const { status } = yield call(authenticationSignUp, action.payload);
    if (status === 200) {
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          email: action.payload.email,
          password: action.payload.password,
        },
      });
    }
  } catch (err) {
    toast.error('Email already in use.!');
    yield put({
      type: 'UPDATE_FIELD_SIGN_UP',
      payload: {
        step: 1,
      },
    });
  }
}

export function* sendEmail(action) {
  try {
    const { status, data } = yield call(
      authenticationSendEmail,
      action.payload,
    );
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

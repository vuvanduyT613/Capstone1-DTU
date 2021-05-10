import produce from 'immer';
import {
  UPDATE_FIELD_SIGN_UP,
  UPDATE_FIELD_SIGN_IN,
  UPDATE_FIELD_SIGN_IN_ERROR,
  UPDATE_FIELD_SIGN_UP_SEND_EMAIL,
} from './actionTypes';

export interface signupInterface {
  email: string;
  password: string;
  step: number;
}

export interface signinInterface {
  email: string;
  password: string;
  role: string;
  status: Number;
}

export interface signupSendEmanilInterface {
  email: string;
  code: number;
}

export interface signError {
  error: string;
}

export interface authenInterface {
  signUp: signupInterface;
  signIn: signinInterface;
  email: signupSendEmanilInterface;
  error: signError;
}

// init state
const initialSignUp: signupInterface = {
  email: '',
  password: '',
  step: 1,
};

const initialSignIn: signinInterface = {
  email: '',
  password: '',
  role: '',
  status: 0,
};

const initialSendEmail: signupSendEmanilInterface = {
  email: '',
  code: 0,
};

const initialError: signError = {
  error: '',
};

const initial: authenInterface = {
  signUp: initialSignUp,
  signIn: initialSignIn,
  email: initialSendEmail,
  error: initialError,
};

export const authenReducer = (state: authenInterface = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_FIELD_SIGN_UP: {
        draft['signUp'] = { ...state.signUp, ...action.payload };
        break;
      }
      case UPDATE_FIELD_SIGN_IN: {
        draft['signIn'] = { ...state.signIn, ...action.payload };
        break;
      }
      case UPDATE_FIELD_SIGN_UP_SEND_EMAIL: {
        draft['email'] = { ...state.email, ...action.payload };
        break;
      }
      case UPDATE_FIELD_SIGN_IN_ERROR: {
        draft['error'] = { ...state.error, ...action.payload };
        break;
      }
    }
  });

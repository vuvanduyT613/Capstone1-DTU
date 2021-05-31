import produce from 'immer';
import {
  UPDATE_FIELD_SIGN_UP,
  UPDATE_FIELD_SIGN_IN,
  UPDATE_FIELD_SIGN_IN_ERROR,
  UPDATE_FIELD_SIGN_UP_SEND_EMAIL,
  GET_COUNTRY,
  GET_DOCTOR,
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

export interface pageOption {
  page: number;
  option: string;
}
export interface country {
  data: object;
}

export interface signError {
  error: string;
}

export interface authenInterface {
  signUp: signupInterface;
  signIn: signinInterface;
  email: signupSendEmanilInterface;
  country: country;
  error: signError;
  pageOption: pageOption;
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

const initialCountry: country = {
  data: {},
};

const initialError: signError = {
  error: '',
};

const initialPageOption: pageOption = {
  page: 1,
  option: '',
};

const initial: authenInterface = {
  signUp: initialSignUp,
  signIn: initialSignIn,
  email: initialSendEmail,
  country: initialCountry,
  error: initialError,
  pageOption: initialPageOption,
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
      case GET_COUNTRY: {
        draft['country'] = { ...state.error, ...action.payload };
        break;
      }
      case GET_DOCTOR: {
        draft['pageOption'] = { ...state.error, ...action.payload };
        break;
      }
      case UPDATE_FIELD_SIGN_IN_ERROR: {
        draft['error'] = { ...state.error, ...action.payload };
        break;
      }
    }
  });

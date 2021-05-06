import produce from 'immer';
import {
  UPDATE_FIELD_SIGN_UP,
  UPDATE_FIELD_SIGN_IN,
  UPDATE_FIELD_SIGN_IN_ERROR,
} from './actionTypes';

export interface signupInterface {
  email: string;
  phoneNumber: string;
  step: number;
}

export interface signinInterface {
  email: string;
  password: string;
  role: string;
  status: Number;
}
export interface authenInterface {
  signUp: signupInterface;
  signIn: signinInterface;
}

const initialSignUp: signupInterface = {
  email: '',
  phoneNumber: '',
  step: 1,
};

const initialSignIn: signinInterface = {
  email: '',
  password: '',
  role: '',
  status: 0,
};

const initial: authenInterface = {
  signUp: initialSignUp,
  signIn: initialSignIn,
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
      case UPDATE_FIELD_SIGN_IN_ERROR: {
        break;
      }
    }
  });

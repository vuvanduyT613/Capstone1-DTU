import produce from 'immer';
import { UPDATE_FIELD_SIGN_UP, UPDATE_FIELD_SIGN_IN } from './actionTypes';

export interface signupInterface {
  email: string;
  phoneNumber: string;
  password: string;
  step: number;
}
export interface authenInterface {
  signUp: signupInterface;
}

const initialSignUp: signupInterface = {
  email: '',
  phoneNumber: '',
  password: '',
  step: 1,
};

const initial: authenInterface = {
  signUp: initialSignUp,
};

export const authenReducer = (state: authenInterface = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_FIELD_SIGN_UP: {
        draft['signUp'] = { ...state.signUp, ...action.payload };
        break;
      }
      case UPDATE_FIELD_SIGN_IN: {
        console.log(action.payload);
        break;
      }
    }
  });

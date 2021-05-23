import produce from 'immer';
import { GET_ALL_USER, ERROR } from './actionTypes';

export interface getAllUser {
  data: object;
}

export interface error {
  data: object;
}

export interface userInterface {
  getAllUser: getAllUser;
  error: error;
}

// init state
const initialAllData: getAllUser = {
  data: [],
};

const initialError: getAllUser = {
  data: [],
};

const initial: userInterface = {
  getAllUser: initialAllData,
  error: initialError,
};

export const userReducer = (state: userInterface = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_USER: {
        console.log(action.payload);
        draft['getAllUser'] = { ...state.getAllUser, ...action.payload };
        break;
      }
      case ERROR: {
        draft['error'] = { ...state.error, ...action.payload };
        break;
      }
    }
  });

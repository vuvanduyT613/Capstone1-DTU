import produce from 'immer';
import { GET_ALL_USER, ERROR, STATUS } from './actionTypes';

export interface getAllUser {
  data: object;
}

export interface error {
  data: object;
}

export interface status {
  doctor: string;
  patient: string;
  attend: string;
  pedding: string;
}
export interface userInterface {
  getAllUser: getAllUser;
  error: error;
  status: status;
}

// init state
const initialAllData: getAllUser = {
  data: [],
};

const initialError: getAllUser = {
  data: [],
};

const initialStatus: status = {
  doctor: '',
  patient: '',
  attend: '',
  pedding: '',
};
const initial: userInterface = {
  getAllUser: initialAllData,
  error: initialError,
  status: initialStatus,
};

export const userReducer = (state: userInterface = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_USER: {
        draft['getAllUser'] = { ...state.getAllUser, ...action.payload };
        break;
      }
      case STATUS: {
        draft['status'] = { ...state.status, ...action.payload };
        break;
      }
      case ERROR: {
        draft['error'] = { ...state.error, ...action.payload };
        break;
      }
    }
  });

import produce from 'immer';
import { GET_ALL_USER, ERROR, STATUS, GET_ALL_CHARTJS } from './actionTypes';

export interface getAllUser {
  data: object;
}

export interface chartJS {
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
  chartJS: chartJS;
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

const initialChartJS: chartJS = {
  data: [],
};

const initial: userInterface = {
  getAllUser: initialAllData,
  error: initialError,
  status: initialStatus,
  chartJS: initialChartJS,
};

export const userReducer = (state: userInterface = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_USER: {
        draft['getAllUser'] = { ...state.getAllUser, ...action.payload };
        break;
      }
      case GET_ALL_CHARTJS: {
        draft['chartJS'] = { ...state.chartJS, ...action.payload };
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

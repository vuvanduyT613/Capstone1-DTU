import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { GET_ALL_USER, ERROR } from 'store/reducers/Admin/actionTypes';
import { UPDATE_FIELD_SIGN_UP } from 'store/reducers/Authetication/actionTypes';
import {
  appointmentGetById,
  appointmentCreate,
  appointmentUpdateById,
  appointmentDeleteById,
} from 'utils/apis';

export function* getAllAppointment(action) {
  try {
    const { status, data } = yield call(appointmentGetById, action.payload);
    if (status === 201) {
      yield put({
        type: GET_ALL_USER,
        payload: {
          data: data,
        },
      });
    }
    return;
  } catch (err) {
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

export function* createAppointment(action) {
  try {
    const { status } = yield call(appointmentCreate, action.payload);
    if (status === 201 || status === 200) {
      toast.success(`Cretae appointment success.!`);
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          step: 0,
        },
      });
    }
    return;
  } catch (err) {
    toast.error(`Create appointment fail id.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

export function* createAppointmentClient(action) {
  try {
    const { status } = yield call(appointmentCreate, action.payload);
    if (status === 201 || status === 200) {
      toast.success(`Medical Register success.!`);
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          email: action.payload.doctor_name,
          step: 0,
        },
      });
    }
    return;
  } catch (err) {
    toast.error(`Medical Register check time.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}
export function* updateAppointment(action) {
  try {
    const { status } = yield call(appointmentUpdateById, action.payload);
    if (status === 201 || status === 200) {
      toast.success(`Update appointment success.!`);
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          step: 0,
        },
      });
    }
    return;
  } catch (err) {
    toast.error(`Update appointment fail id.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

export function* deleteAppointment(action) {
  try {
    const { status } = yield call(appointmentDeleteById, action.payload);
    if (status === 204) {
      toast.success(`Delete appointment success.!`);
      window.location.reload();
    }
    return;
  } catch (err) {
    toast.error(`Delete appointment fail.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { GET_ALL_USER, ERROR } from 'store/reducers/Admin/actionTypes';
import { UPDATE_FIELD_SIGN_UP } from 'store/reducers/Authetication/actionTypes';
import { clinicGetById, clinicCreate, clinicUpdate, clinicDelete, clinicGetAll } from 'utils/apis';

export function* getAllClinic(action) {
  try {
    const { status, data } = yield call(clinicGetById, action.payload);
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

export function* createClinic(action) {
  try {
    const form = new FormData();
    form.append('nameClinic', action.payload.nameClinic);
    form.append('country', action.payload.country);
    form.append('city', action.payload.city);
    form.append('address', action.payload.address);
    form.append('price', action.payload.price);
    form.append('image', action.payload.image);
    form.append('timeWorkStart', action.payload.timeWorkStart);
    form.append('timeWorkEnd', action.payload.timeWorkEnd);
    form.append('overview', action.payload.overview);

    const { status } = yield call(clinicCreate, { token: action.payload.token, data: form });
    if (status === 201) {
      toast.success(`Add clinic success.!`);
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          step: 0,
        },
      });
    }
    return;
  } catch (err) {
    toast.error(`Delete clinic fail.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

export function* updateClinic(action) {
  try {
    const form = new FormData();
    form.append('nameClinic', action.payload.nameClinic);
    form.append('country', action.payload.country);
    form.append('city', action.payload.city);
    form.append('address', action.payload.address);
    form.append('price', action.payload.price);
    form.append('image', action.payload.image);
    form.append('timeWorkStart', action.payload.timeWorkStart);
    form.append('timeWorkEnd', action.payload.timeWorkEnd);
    form.append('overview', action.payload.overview);

    const { status } = yield call(clinicUpdate, {
      token: action.payload.token,
      id: action.payload.id,
      data: form,
    });
    if (status === 201) {
      toast.success(`Add clinic success.!`);
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          step: 0,
        },
      });
    }
    return;
  } catch (err) {
    toast.error(`Delete clinic fail.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

export function* deleteClinic(action) {
  try {
    const { status } = yield call(clinicDelete, action.payload);
    if (status === 204) {
      toast.success(`Delete clinic success.!`);
      window.location.reload();
    }
    return;
  } catch (err) {
    toast.error(`Delete clinic fail.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

export function* getClinic(action) {
  try {
    const { data, status } = yield call(clinicGetAll, action.payload);
    if (status === 201) {
      Cookies.set('clinic_data', data.results);
    }
    return;
  } catch (err) {
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

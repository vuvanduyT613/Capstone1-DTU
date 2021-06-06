import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { GET_ALL_USER, ERROR, STATUS, GET_ALL_CHARTJS } from 'store/reducers/Admin/actionTypes';
import { UPDATE_FIELD_SIGN_UP } from 'store/reducers/Authetication/actionTypes';
import {
  getById,
  userUpdateById,
  doctorUpdateById,
  userDeleteById,
  doctorDeleteById,
  doctorGetAll,
  userGetAll,
  appointmentGetById,
  appointmentGetAll,
  getAnalysis,
  getAnalysisDoctor,
} from 'utils/apis';

import Cookies from 'js-cookie';

const expires = process.env.REACT_APP_EXPIRES_COOKIE;

export function* getByIdUtil(action) {
  try {
    const { status, data } = yield call(getById, action.payload);
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

export function* updateById(action) {
  try {
    const form = new FormData();
    form.append('userName', action.payload.userName);
    form.append('email', action.payload.email);
    form.append('password', action.payload.changepassword);
    form.append('fistName', action.payload.fistName);
    form.append('lastName', action.payload.lastName);
    form.append('dateOfBirth', action.payload.dateOfBirth);
    form.append('country', action.payload.country);
    form.append('city', action.payload.city);
    form.append('address', action.payload.address);
    form.append('postalCode', action.payload.postalCode);
    form.append('phone', action.payload.phone);
    form.append('avatar', action.payload.avatar);
    if (action.payload.role.value !== 'user') {
      form.append('level', action.payload.level);
      form.append('price', action.payload.price);
      form.append('detail', action.payload.detail);
      form.append('specialize', action.payload.specialize);
    }
    const { status } = yield call(
      action.payload.role.value === 'user' ? userUpdateById : doctorUpdateById,
      { token: action.payload.token, id: action.payload.id, data: form },
    );
    console.log(status);

    if (status === 201 || status === 200) {
      toast.success(`Update ${action.payload.role.value} success.!`);
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          step: 0,
        },
      });
    }
    return;
  } catch (err) {
    toast.error(`Delete ${action.payload.role.vaule} fail.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

export function* deleteById(action) {
  try {
    const { status } = yield call(
      action.payload.role === 'user' ? userDeleteById : doctorDeleteById,
      { token: action.payload.token, id: action.payload.id },
    );
    if (status === 204) {
      toast.success(`Delete ${action.payload.role} success.!`);
      window.location.reload();
    }
    return;
  } catch (err) {
    toast.error(`Delete ${action.payload.role} fail.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

export function* adminStatus(action) {
  try {
    let attend = 0,
      pedding = 0;
    const dataDoctor = yield call(doctorGetAll, action.payload);
    const dataUser = yield call(userGetAll, action.payload);
    const dataAppointment = yield call(appointmentGetAll, action.payload);
    console.log(dataAppointment);

    dataAppointment.data.results.map(value => {
      if (value.status === 'Active') {
        ++pedding;
      }
      if (value.status === 'Inactive') {
        ++attend;
      }
    });
    if (dataDoctor.status === 201 && dataUser.status === 200) {
      yield put({
        type: STATUS,
        payload: {
          doctor: dataDoctor.data.totalResults,
          patient: dataUser.data.totalResults,
          attend: attend,
          pedding: pedding,
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

export function* chartJS() {
  try {
    const { status, data } = yield call(
      Cookies.get('role') === 'doctor' ? getAnalysisDoctor : getAnalysis,
    );
    if (status === 201) {
      yield put({
        type: GET_ALL_CHARTJS,
        payload: { data: data },
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

export function* updateByIdUser(action) {
  try {
    const arr = action.payload.userName.split(/(\s+)/);
    const lastName = arr[arr.length - 1];
    arr.pop();
    const form = new FormData();
    form.append('email', action.payload.email);
    form.append('fistName', arr.join(''));
    form.append('lastName', lastName);
    form.append('dateOfBirth', action.payload.dateOfBirth);
    form.append('phone', action.payload.phone);
    form.append('avatar', action.payload.avatar);
    if (action.payload.changepassword !== '') {
      form.append('password', action.payload.changepassword);
    }
    const { data, status } = yield call(userUpdateById, {
      token: action.payload.token,
      id: action.payload.id,
      data: form,
    });

    if (status === 200) {
      Cookies.set('email', data.email, expires);
      Cookies.set('user_name', `${data.fistName} ${data.lastName}`, expires);
      Cookies.set('user_phone', `${data.phone}`, expires);
      Cookies.set('user_date', `${data.dateOfBirth}`, expires);
      Cookies.set('user_avatar', `${data.avatar}`, expires);
      if (action.payload.password !== '') {
        Cookies.set('password', action.payload.password, expires);
      }
      yield put({
        type: UPDATE_FIELD_SIGN_UP,
        payload: {
          step: 0,
        },
      });
    }
    return;
  } catch (err) {
    toast.error(`Update fail.!`);
    yield put({
      type: ERROR,
      payload: { data: err },
    });
  }
}

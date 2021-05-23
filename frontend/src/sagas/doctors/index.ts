import { call, put } from 'redux-saga/effects';
import { GET_ALL_USER, ERROR } from 'store/reducers/Admin/actionTypes';
import { doctorGetAll } from 'utils/apis';
//import { toast } from 'react-toastify';

export function* getAllDoctor(action) {
  try {
    const { status, data } = yield call(doctorGetAll, action.payload);
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

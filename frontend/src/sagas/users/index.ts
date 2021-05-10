import { call, put } from 'redux-saga/effects';
import { GET_ALL_USER, ERROR } from 'store/reducers/Users/actionTypes';
import { userGetAll } from 'utils/apis';
import { toast } from 'react-toastify';

export function* getAll(action) {
  try {
    const { status, data } = yield call(userGetAll, action.payload);
    if (status === 200) {
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

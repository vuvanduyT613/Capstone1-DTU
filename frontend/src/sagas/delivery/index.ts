import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { GET_ALL_USER, ERROR } from 'store/reducers/Admin/actionTypes';
import { UPDATE_FIELD_SIGN_UP } from 'store/reducers/Authetication/actionTypes';
import { deliveryGetByUserId } from 'utils/apis';

export function* getAllDelivery(action) {
  try {
    const { status, data } = yield call(deliveryGetByUserId, action.payload);
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

import { all, takeLatest, /*takeEvery*/ takeLeading } from 'redux-saga/effects';
import {
  signIn,
  sendEmail,
  signUp,
  getCountry,
  forgot,
  reset,
} from './Authentication';
import { getAll } from './users';

//@ts-ignore
function* rootSaga() {
  yield all([
    takeLeading('UPDATE_FIELD_SIGN_IN', signIn),
    takeLeading('UPDATE_FIELD_SIGN_UP_SEND_EMAIL', sendEmail),
    takeLatest('UPDATE_FIELD_SIGN_UP_API', signUp),
    takeLeading('GET_ALL_USER_API', getAll),
    takeLeading('GET_COUNTRY', getCountry),
    takeLeading('FORGOT_SIGN_IN', forgot),
    takeLeading('RESET_SIGN_IN', reset),
  ]);
}

export default rootSaga;

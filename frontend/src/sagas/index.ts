import { all, takeLatest, takeEvery, takeLeading } from 'redux-saga/effects';
import { signIn, sendEmail } from './Authentication';

//@ts-ignore
function* rootSaga() {
  yield all([
    takeLatest('UPDATE_FIELD_SIGN_IN', signIn),
    takeLeading('UPDATE_FIELD_SIGN_UP_SEND_EMAIL', sendEmail),
  ]);
}

export default rootSaga;

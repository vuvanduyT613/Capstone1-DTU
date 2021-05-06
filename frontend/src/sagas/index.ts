import { all, takeLatest } from 'redux-saga/effects';
import { signIn } from './Authentication';

//@ts-ignore
function* rootSaga() {
  yield all([takeLatest('UPDATE_FIELD_SIGN_IN', signIn)]);
}

export default rootSaga;

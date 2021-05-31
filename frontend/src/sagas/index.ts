import { all, takeLatest, /*takeEvery*/ takeLeading } from 'redux-saga/effects';
import { signIn, sendEmail, signUp, getCountry, forgot, reset } from './authentication';
import { getAll } from './users';
import { getAllDoctor } from './doctors';
import {
  getAllAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  createAppointmentClient,
} from './appointments';
import { getAllDelivery } from './delivery';
import { getByIdUtil, updateById, deleteById, adminStatus } from './util';

//@ts-ignore
function* rootSaga() {
  yield all([
    takeLeading('UPDATE_FIELD_SIGN_IN', signIn),
    takeLeading('UPDATE_FIELD_SIGN_UP_SEND_EMAIL', sendEmail),
    takeLatest('UPDATE_FIELD_SIGN_UP_API', signUp),
    takeLatest('GET_ALL_DOCTOR_API', getAllDoctor),
    takeLatest('GET_ALL_USER_API', getAll),
    takeLeading('GET_COUNTRY', getCountry),
    takeLeading('FORGOT_SIGN_IN', forgot),
    takeLeading('RESET_SIGN_IN', reset),
    takeLeading('GET_BY_ID', getByIdUtil),
    takeLeading('UPDATE_BY_ID', updateById),
    takeLeading('DELETE_BY_ID', deleteById),
    takeLeading('GET_ALL_APPOINTMENT_API', getAllAppointment),
    takeLeading('CREATE_ALL_APPOINTMENT_API', createAppointment),
    takeLeading('CREATE_ALL_APPOINTMENT_CLIENT_API', createAppointmentClient),
    takeLeading('UPDATE_ALL_APPOINTMENT_API', updateAppointment),
    takeLeading('DELETE_ALL_APPOINTMENT_API', deleteAppointment),
    takeLeading('ADMIN_STATUS', adminStatus),
    takeLeading('GET_ALL_DELIVERY_API', getAllDelivery),
  ]);
}

export default rootSaga;

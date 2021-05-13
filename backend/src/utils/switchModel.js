const {
  Doctor,
  DoctorSpecizalization,
  Specizalization,
  HospitalAffiliation,
  Qualification,
  Appointment,
  AppointmentStatus,
  Booking,
  Office,
  NetworkInsurance,
  OfficeDoctor,
} = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const switchModel = (action) => {
  switch (action) {
    case `Doctor`:
      return Doctor;

    case `DoctorSpecizalization`:
      return DoctorSpecizalization;

    case `Specizalization`:
      return Specizalization;

    case `HospitalAffiliation`:
      return HospitalAffiliation;

    case `Qualification`:
      return Qualification;

    case `Appointment`:
      return Appointment;

    case `AppointmentStatus`:
      return AppointmentStatus;

    case `Booking`:
      return Booking;

    case `Office`:
      return Office;

    case `NetworkInsurance`:
      return NetworkInsurance;

    case `OfficeDoctor`:
      return OfficeDoctor;
  }
};

const validateRoute = (to) => {
  const arr = [
    `doctor-specizalization`,
    `specizalization`,
    `hospital`,
    `qualification`,
    `v1`,
    `network-insurance`,
    `office-doctor`,
    `appointment-status`,
    `booking`,
  ];
  return arr.indexOf(to);
};

const handlerObject = (before, to, action, query, body) => {
  if (validateRoute(to ? to : ``) !== -1 && before('doctors')) {
    switch (to) {
      case `doctor-specizalization`:
        return action(`DoctorSpecizalization`, query ? query : ``, body ? body : ``);
      case `specizalization`:
        return action(`Specizalization`, query ? query : ``, body ? body : ``);
      case `hospital`:
        return action(`HospitalAffiliation`, query ? query : ``, body ? body : ``);
      case `qualification`:
        return action(`Qualification`, query ? query : ``, body ? body : ``);
      case `v1`:
        return action(`Doctor`, query ? query : ``, body ? body : ``);
    }
  }
  if (validateRoute(to ? to : ``) !== -1 && before('offices')) {
    switch (to) {
      case `network-insurance`:
        return action(`NetworkInsurance`, query ? query : ``, body ? body : ``);
      case `office-doctor`:
        return action(`OfficeDoctor`, query ? query : ``, body ? body : ``);
      case `v1`:
        return action(`Office`, query ? query : ``, body ? body : ``);
    }
  }
  if (validateRoute(to ? to : ``) !== -1 && before('appointments')) {
    switch (to) {
      case `appointment-status`:
        return action(`AppointmentStatus`, query ? query : ``, body ? body : ``);
      case `booking`:
        return action(`Booking`, query ? query : ``, body ? body : ``);
      case `v1`:
        return action(`Doctor`, query ? query : ``, body ? body : ``);
    }
  }
  throw new ApiError(httpStatus.NOT_FOUND, 'Not Found');
};

module.exports = {
  switchModel,
  handlerObject,
};

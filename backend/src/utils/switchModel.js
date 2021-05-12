const { Doctor, DoctorSpecizalization, Specizalization, HospitalAffiliation, Qualification } = require('../models');

module.exports.switchModel = (action) => {
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
  }
};

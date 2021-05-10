module.exports.Token = require('./token.model');

// user schema
module.exports.User = require('./users/user.model');

// doctor schema
module.exports.Doctor = require('./doctors/doctor.model');
module.exports.DoctorSpecizalization = require('./doctors/doctorSpecizalization.model');
module.exports.Specizalization = require('./doctors/specialization.model');
module.exports.HospitalAffiliation = require('./doctors/hospitalAffiliation.model');
module.exports.Qualification = require('./doctors/qualification.model');

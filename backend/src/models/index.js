//token
module.exports.Token = require(`./token.model`);

// user schema
module.exports.User = require(`./users/user.model`);

// doctor schema
module.exports.Doctor = require(`./doctors/doctor.model`);
module.exports.DoctorSpecizalization = require(`./doctors/doctorSpecizalization.model`);
module.exports.Specizalization = require(`./doctors/specialization.model`);
module.exports.HospitalAffiliation = require(`./doctors/hospitalAffiliation.model`);
module.exports.Qualification = require(`./doctors/qualification.model`);

// appointment
module.exports.Appointment = require(`./appointments/appointment.model`);
module.exports.AppointmentStatus = require(`./appointments/appointmentStatus.model`);
module.exports.Booking = require(`./appointments/booking.nodel`);

//office
module.exports.Office = require(`./offices/office.model`);
module.exports.NetworkInsurance = require(`./offices/networkInsurance.model`);
module.exports.OfficeDoctor = require(`./offices/officeDoctor.model`);

//chat
module.exports.ChatRoom = require('./chat/chatRoom.model');
module.exports.Message = require('./chat/messages.model');

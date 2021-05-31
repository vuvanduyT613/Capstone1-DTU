const userModel = require("../models/users/user.model");
const doctorModel = require("../models/doctors/doctor.model");
const appointmentModel = require("../models/appointments/appointment.model");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const mailer = require("../controllers/nodemailer.controller");

module.exports.appointment = () => async (req, res, next) => {
	try {
		const data = await appointmentModel.find({
			userID: req.body.userID,
			doctorID: req.body.doctorID,
		});
		const user = await userModel.findById(req.body.userID);
		const doctor = await doctorModel.findById(req.body.doctorID);
		if (
			new Date(data[0].time) < new Date(req.body.time) &&
			new Date(req.body.time) < new Date(data[0].time + 1 * 60 * 60 * 1000)
		) {
			throw new ApiError(httpStatus.NOT_FOUND, "Date exist in data base");
		} else {
			req.body.email = user.email;
			req.body.transaction = data[0].id;
			req.body.address = doctor.address;
			req.body.username = `${user.fistName} ${user.lastName}`;
			req.body.doctor = doctor.userName;
			req.body.phone = user.phone;
			mailer.sendEmailAppointment(req, res, next);
		}
	} catch (err) {
		throw new ApiError(httpStatus.BAD_REQUEST);
	}
};

const mongoose = require("mongoose");
const { toJSON, paginate } = require("../plugins");

const appointmentSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "User",
			require: true,
		},
		doctorID: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "office",
			require: true,
		},
		time: {
			type: Date,
			require: true,
		},
		status: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

// add plugin that converts mongoose to json
appointmentSchema.plugin(toJSON);
appointmentSchema.plugin(paginate);

/**
 * @typedef Appointment
 */
const Appointment = mongoose.model("appointments", appointmentSchema);

module.exports = Appointment;

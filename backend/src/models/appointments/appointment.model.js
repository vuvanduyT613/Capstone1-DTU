const mongoose = require("mongoose");
const { toJSON, paginate } = require("../plugins");

const appointmentSchema = mongoose.Schema(
	{
		userID: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "User",
			require: true,
		},
		doctorID: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "Doctor",
			require: true,
		},
		time: {
			type: Date,
			require: true,
		},
		price: {
			type: Number,
		},
		status: {
			type: String,
			default: "active",
		},
		payment: {
			type: String,
			default: "Balance",
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

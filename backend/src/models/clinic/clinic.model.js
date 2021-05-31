const mongoose = require("mongoose");
const { toJSON, paginate } = require("../plugins");

const clinicSchema = mongoose.Schema(
	{
		NameClinic: {
			type: Date,
			require: true,
		},
		Address: {
			type: Date,
			require: true,
		},
		price: [],
		image: {
			type: String,
		},
		postionMap: {
			type: String,
		},
		timeWorkStart: {
			type: Date,
			require: true,
		},
		timeWorkEnd: {
			type: Date,
			require: true,
		},
		overview: {
			type: String,
			require: true,
		},
		doctor: [],
	},
	{
		timestamps: true,
	}
);

// add plugin that converts mongoose to json
clinicSchema.plugin(toJSON);
clinicSchema.plugin(paginate);

/**
 * @typedef Clinic
 */
const Clinic = mongoose.model("appointments", clinicSchema);

module.exports = Clinic;

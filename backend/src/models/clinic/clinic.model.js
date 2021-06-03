const mongoose = require("mongoose");
const { toJSON, paginate } = require("../plugins");

const clinicSchema = mongoose.Schema(
	{
		nameClinic: {
			type: String,
			require: true,
		},
		country: {
			type: String,
			require: true,
			maxlength: 10,
		},
		city: {
			type: String,
			require: true,
			maxlength: 15,
		},
		address: {
			type: String,
			require: true,
			maxlength: 10,
		},
		price: {
			type: Number,
			require: true,
		},
		image: {
			type: String,
		},
		postionMap: {
			type: String,
		},
		timeWorkStart: {
			type: String,
			require: true,
		},
		timeWorkEnd: {
			type: String,
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
const Clinic = mongoose.model("clinics", clinicSchema);

module.exports = Clinic;

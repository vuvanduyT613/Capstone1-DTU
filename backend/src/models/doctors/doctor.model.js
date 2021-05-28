const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { toJSON, paginate } = require("../plugins");

const doctorSchema = mongoose.Schema(
	{
		fistName: {
			type: String,
			required: true,
			maxlength: 20,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			maxlength: 10,
			trim: true,
			unique: false,
		},
		userName: {
			type: String,
			required: true,
			trim: true,
			maxlength: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Invalid email");
				}
			},
		},
		dateOfBirth: {
			type: Date,
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
		postalCode: {
			type: String,
			require: true,
			maxlength: 10,
		},
		role: {
			type: String,
			default: "doctor",
			maxlength: 10,
		},
		phone: {
			type: String,
			require: true,
			maxlength: 13,
		},
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
		avatar: {
			type: String,
		},
		level: {
			type: String,
		},
		status: {
			type: String,
			default: "alive",
		},
		specialize: {
			type: String,
			default: "Mat",
		},
		price: {
			type: String,
		},
		detail: {
			type: String,
			maxlength: 1000,
		},
	},
	{
		timestamps: true,
	}
);

// add plugin that converts mongoose to json
doctorSchema.plugin(toJSON);
doctorSchema.plugin(paginate);
/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
doctorSchema.statics.isEmailTaken = async function (email, excludeUserId) {
	const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
	return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
doctorSchema.methods.isPasswordMatch = async function (password) {
	const user = this;
	return bcrypt.compare(password, user.password);
};

doctorSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}
	next();
});

/**
 * @typedef Doctor
 */
const Doctor = mongoose.model("doctors", doctorSchema);

module.exports = Doctor;

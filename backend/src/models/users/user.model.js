const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { toJSON, paginate } = require("../plugins");
const { roles } = require("../../config/roles");

const userSchema = mongoose.Schema(
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
		password: {
			type: String,
			required: true,
			trim: true,
			minlength: 8,
			validate(value) {
				if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
					throw new Error("Password must contain at least one letter and one number");
				}
			},
			private: true, // used by the toJSON plugin
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
			default: "user",
			maxlength: 5,
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
	},
	{
		timestamps: true,
	}
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
	const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
	return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
	const user = this;
	return bcrypt.compare(password, user.password);
};

userSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}
	next();
});

/**
 * @typedef User
 */
const User = mongoose.model("users", userSchema);

module.exports = User;

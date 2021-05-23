const Joi = require("joi");
const { password } = require("./custom.validation");

const register = {
	body: Joi.object().keys({
		fistName: Joi.string().required(),
		lastName: Joi.string().required(),
		userName: Joi.string().required(),
		email: Joi.string().required().email(),
		password: Joi.string().required().custom(password),
		dateOfBirth: Joi.date().required(),
		country: Joi.string().required(),
		city: Joi.string().required(),
		province: Joi.string().required(),
		postalCode: Joi.string().required(),
		phone: Joi.string().required(),
		avatar: Joi.string().required(),
	}),
};

const login = {
	body: Joi.object().keys({
		email: Joi.string().required(),
		password: Joi.string().required(),
	}),
};

const logout = {
	body: Joi.object().keys({
		refreshToken: Joi.string().required(),
	}),
};

const refreshTokens = {
	body: Joi.object().keys({
		refreshToken: Joi.string().required(),
	}),
};

const forgotPassword = {
	body: Joi.object().keys({
		email: Joi.string().email().required(),
	}),
};

const resetPassword = {
	query: Joi.object().keys({
		token: Joi.string().required(),
	}),
	body: Joi.object().keys({
		password: Joi.string().required().custom(password),
	}),
};

const verifyEmail = {
	query: Joi.object().keys({
		token: Joi.string().required(),
	}),
};

module.exports = {
	register,
	login,
	logout,
	refreshTokens,
	forgotPassword,
	resetPassword,
	verifyEmail,
};

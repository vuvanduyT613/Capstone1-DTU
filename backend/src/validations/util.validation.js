const Joi = require("joi");
const { objectId, password } = require("./custom.validation");

const createValidation = {
	//
	body: Joi.object().keys({
		doctorID: Joi.string().required().custom(objectId),
		userID: Joi.string().required().custom(objectId),
		time: Joi.date(),
		status: Joi.string(),
		price: Joi.number(),
	}),
};

const register = {
	body: Joi.object().keys({
		fistName: Joi.string(),
		lastName: Joi.string(),
		userName: Joi.string(),
		email: Joi.string().email(),
		password: Joi.string().custom(password),
		dateOfBirth: Joi.date(),
		country: Joi.string(),
		city: Joi.string(),
		address: Joi.string(),
		postalCode: Joi.string(),
		phone: Joi.string(),
		avatar: Joi.string(),
	}),
};

const updateValidation = {
	query: Joi.object().keys({
		id: Joi.required().custom(objectId),
	}),
	body: Joi.object()
		.keys({
			//---------doctor -----------
			fistName: Joi.string().max(25),
			lastName: Joi.string().max(25),
			professionalStateme: Joi.string().min(8).max(50),
			practicingFrom: Joi.date(),

			//doctor specizalization
			specializationID: Joi.string().custom(objectId),

			//hospital
			hospitalName: Joi.string().max(50),
			city: Joi.string().min(8).max(50),
			country: Joi.string(),

			//qualification
			qualificationName: Joi.string().max(50),
			practicingFrom: Joi.string().min(50),

			//speciallzation
			speciallzationName: Joi.string().max(50),

			//
			doctorID: Joi.string().custom(objectId),
			hospitalID: Joi.string().custom(objectId),
		})
		.min(1),
};

const getValidation = {
	query: Joi.object().keys({
		userName: Joi.string(),
		specialize: Joi.string(),
		userID: Joi.string(),
		address: Joi.string(),
		city: Joi.string(),
		country: Joi.string(),
		nameClinic: Joi.string(),
		role: Joi.string(),
		sortBy: Joi.string(),
		key: Joi.string(),
		limit: Joi.number().integer(),
		page: Joi.number().integer(),
		id: Joi.string().custom(objectId),
	}),
};

const deleteValidation = {
	query: Joi.object().keys({
		id: Joi.string().custom(objectId),
	}),
};

module.exports = {
	register,
	createValidation,
	updateValidation,
	getValidation,
	deleteValidation,
};

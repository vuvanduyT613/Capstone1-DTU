const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { switchModel } = require("../utils/switchModel");

/**
 * Create a record a database of doctor
 * @param {String} action
 * @param {Object} option
 * @returns {Promise<User>}
 */
const create = async (action, option) => {
	if (
		action === "Appointment" || action === "Clinic"
			? null
			: await switchModel(action).isEmailTaken(option.body.email)
	) {
		throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
	}
	const response = await switchModel(action).create(option.body);
	return response;
};

/**
 * Query for record
 * @param {String} action - Current page (default = 1)
 * @param {Object} option - Mongo filter
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)

* @returns {Promise<QueryResult>}
 */
const query = async (action, option) => {
	const { filter, options } = option;
	const response = await switchModel(action).paginate(filter, options);
	return response;
};

/**
 * Get by id
 * @param {String} action
 * @param {Object} option
 * @returns {Promise<User>}
 */
const getById = async (action, option) => {
	const response = await switchModel(action).findById(option.id);
	return response;
};

/**
 * Update by id
 * @param {String} action
 * @param {Object} option
 * @returns {Promise<User>}
 */

const updateById = async (action, option) => {
	const { body } = option;
	const data = await getById(action, option);
	if (!data) {
		throw new ApiError(httpStatus.NOT_FOUND, " Not found");
	}
	data.doctor && !option.body.image ? Object.assign(data, { ...data.doctor.push(body) }) : Object.assign(data, body);
	await data.save();
	return data;
};

/**
 * Delete by id
 * @param {String} action
 * @param {Object} option
 * @returns {Promise<User>}
 */

const deleteById = async (action, option) => {
	const data = await getById(action, option);
	if (!data) {
		throw new ApiError(httpStatus.NOT_FOUND, "Not found");
	}
	await data.remove();
	return data;
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const objectByEmail = async (action, email) => {
	return switchModel(action).findOne({ email });
};

module.exports = {
	create,
	query,
	getById,
	updateById,
	deleteById,
	objectByEmail,
};

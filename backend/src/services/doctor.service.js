const httpStatus = require('http-status');
const { Doctor, DoctorSpecizalization, Specizalization, HospitalAffiliation, Qualification } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a record a database of doctor
 * @param {Doctor| DoctorSpecizalization| Specizalization| HospitalAffiliation| Qualification} action
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const create = async (action, userBody) => {
  const response = await [action].create(userBody);
  return response;
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get by id
 * @param {Doctor| DoctorSpecizalization| Specizalization| HospitalAffiliation| Qualification} action
 * @param {ObjectId} objectId
 * @returns {Promise<User>}
 */
const getObjectById = async (action, objectId) => {
  return [action].findById(objectId);
};

/**
 * Update by id
 * @param {Doctor| DoctorSpecizalization| Specizalization| HospitalAffiliation| Qualification} action
 * @param {ObjectId} objectId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateObjectById = async (action, objectId, updateBody) => {
  const data = await getObjectById(objectId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, ' not found');
  }
  Object.assign(data, updateBody);
  await [action].save();
  return data;
};

/**
 * Delete by id
 * @param {Doctor| DoctorSpecizalization| Specizalization| HospitalAffiliation| Qualification} action
 * @param {ObjectId} objectId
 * @returns {Promise<User>}
 */
const deleteObjectById = async (action, objectId) => {
  const data = await getUserById(objectId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await [action].remove();
  return data;
};

module.exports = {
  create,
  queryUsers,
  getObjectById,
  updateObjectById,
  deleteObjectById,
};

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { switchModel } = require('../utils/switchModel');

/**
 * Create a record a database of doctor
 * @param {String} action
 * @param {Object} body
 * @returns {Promise<User>}
 */
const createObject = async (action, body) => {
  const response = await switchModel(action).create(body);
  return response;
};

/**
 * Query for record
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryObject = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get by id
 * @param {String} action
 * @param {ObjectId} objectId
 * @returns {Promise<User>}
 */
const getObjectById = async (action, objectId) => {
  return switchModel(action).findById(objectId);
};

/**
 * Update by id
 * @param {String} action
 * @param {ObjectId} objectId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateObjectById = async (action, objectId, updateBody) => {
  const data = await getObjectById(action, objectId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, ' Not found');
  }
  Object.assign(data, updateBody);
  await data.save();
  return data;
};

/**
 * Delete by id
 * @param {String} action
 * @param {ObjectId} objectId
 * @returns {Promise<User>}
 */
const deleteObjectById = async (action, objectId) => {
  const data = await getUserById(objectId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  await data.remove();
  return data;
};

module.exports = {
  createObject,
  queryObject,
  getObjectById,
  updateObjectById,
  deleteObjectById,
};

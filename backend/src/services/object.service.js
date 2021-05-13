const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { switchModel } = require('../utils/switchModel');

/**
 * Create a record a database of doctor
 * @param {String} action
 * @param {Object} body
 * @returns {Promise<User>}
 */
const create = async (action, body) => {
  const response = await switchModel(action).create(body);
  return response;
};

/**
 * Query for record
 * @param {String} action - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const query = async (action) => {
  const response = await switchModel(action).find({});
  return response;
};

/**
 * Get by id
 * @param {String} action
 * @param {ObjectId} objectId
 * @returns {Promise<User>}
 */
const getById = async (action, objectId) => {
  const response = switchModel(action).findById(objectId);
  return response;
};

/**
 * Update by id
 * @param {String} action
 * @param {ObjectId} objectId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */

const updateById = async (action, objectId, updateBody) => {
  const data = await getById(action, objectId);
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

const deleteById = async (action, objectId) => {
  const data = await getById(objectId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  await data.remove();
  return data;
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};

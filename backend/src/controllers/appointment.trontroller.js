const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { handlerObject } = require('../utils/switchModel');
const { objectService } = require('../services');
const { create, query, getById, updateById, deleteById } = objectService;

const createObject = catchAsync(async (req, res) => {
  const result = await handlerObject(`offices`, req.params.slug, create, req.body);
  res.status(httpStatus.CREATED).send(result);
});

const getObject = catchAsync(async (req, res) => {
  const result = req.query?.id
    ? await handlerObject(`offices`, req.params.slug, getById, req.query.id)
    : await handlerObject(`offices`, req.params.slug, query);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  res.status(httpStatus.CREATED).send(result);
});

const updateObject = catchAsync(async (req, res) => {
  const result = await handlerObject(`offices`, req.params.slug, updateById, req.query.id, req.body);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  res.send(result);
});

const deleteObject = catchAsync(async (req, res) => {
  const result = await handlerObject(`offices`, req.params.slug, deleteById, req.query.id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createObject,
  getObject,
  updateObject,
  deleteObject,
};

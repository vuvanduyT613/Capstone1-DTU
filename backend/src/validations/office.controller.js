const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createOffice = {
  body: Joi.object().keys({
    doctorID: Joi.string().required().custom(objectId),
    hospitalID: Joi.string().required().custom(objectId),
    timeSlotPerUser: Joi.number().required(),
    fistConsultationFree: Joi.number().required(),
    followupConsultationFree: Joi.number().required(),
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    zip: Joi.string().required(),
  }),
};

const getOffice = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getOffice = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateOffice = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      doctorID: Joi.string().required().custom(objectId),
      hospitalID: Joi.string().required().custom(objectId),
      timeSlotPerUser: Joi.number().required(),
      fistConsultationFree: Joi.number().required(),
      followupConsultationFree: Joi.number().required(),
      streetAddress: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      country: Joi.string().required(),
      zip: Joi.string().required(),
    })
    .min(1),
};

const deleteOffice = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createOffice,
  getOffice,
  getOffice,
  updateOffice,
  deleteOffice,
};

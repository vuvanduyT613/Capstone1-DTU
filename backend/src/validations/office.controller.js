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

const updateOffice = {
  query: Joi.object().keys({
    id: Joi.required().custom(objectId),
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

module.exports = {
  createOffice,
  updateOffice,
};

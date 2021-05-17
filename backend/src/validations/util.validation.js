const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createValidation = {
  //
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
      timeSlotPerUser: Joi.number(),
      fistConsultationFree: Joi.number(),
      followupConsultationFree: Joi.number(),
      streetAddress: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      zip: Joi.string(),
    })
    .min(1),
};

const getValidation = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    id: Joi.string().custom(objectId),
  }),
};

const deleteValidation = {
  query: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createValidation,
  updateValidation,
  getValidation,
  deleteValidation,
};

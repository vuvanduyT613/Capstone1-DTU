const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const officeSchema = mongoose.Schema({
  doctorID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Doctor',
    require: true,
  },
  hospitalID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Hospital',
    require: true,
  },
  timeSlotPerUser: {
    type: Number,
    require: true,
  },
  fistConsultationFree: {
    type: Number,
  },
  followupConsultationFree: {
    type: Number,
  },
  streetAddress: {
    type: String,
    maxlength: 500,
  },
  city: {
    type: String,
    maxlength: 100,
  },
  state: {
    type: String,
    maxlength: 100,
  },
  country: {
    type: String,
    maxlength: 100,
  },
  zip: {
    type: String,
    maxlength: 50,
  },
});

// add plugin that converts mongoose to json
officeSchema.plugin(toJSON);
officeSchema.plugin(paginate);

/**
 * @typedef Office
 */
const Office = mongoose.model('offices', officeSchema);

module.exports = Office;

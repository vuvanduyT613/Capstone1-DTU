const mongoose = require('mongoose');

const insuranceSchema = mongoose.Schema({
  officeID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Office',
    require: true,
  },
  insuranceName: {
    type: String,
    require: true,
    maxLength: 200,
  },
});

// add plugin that converts mongoose to json

const Insurance = mongoose.model('insurances', insuranceSchema);

module.exports = Insurance;

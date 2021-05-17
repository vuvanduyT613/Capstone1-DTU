const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

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
insuranceSchema.plugin(toJSON);
insuranceSchema.plugin(paginate);

const Insurance = mongoose.model('insurances', insuranceSchema);

module.exports = Insurance;

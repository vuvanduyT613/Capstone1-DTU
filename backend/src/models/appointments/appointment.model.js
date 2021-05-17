const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const appointmentStatusSchema = mongoose.Schema({
  status: {
    type: String,
    require: true,
  },
});

// add plugin that converts mongoose to json
appointmentStatusSchema.plugin(toJSON);
appointmentStatusSchema.plugin(paginate);

/**
 * @typedef Doctor
 */
const AppointmentStatus = mongoose.model('appointmentStatus', appointmentStatusSchema);

module.exports = AppointmentStatus;

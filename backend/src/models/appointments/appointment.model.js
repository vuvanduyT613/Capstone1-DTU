const mongoose = require('mongoose');

const appointmentStatusSchema = mongoose.Schema({
  status: {
    type: String,
    require: true,
  },
});

// add plugin that converts mongoose to json

const AppointmentStatus = mongoose.model('appointmentStatus', appointmentStatusSchema);

module.exports = AppointmentStatus;

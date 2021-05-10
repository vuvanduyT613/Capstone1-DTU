const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      require: true,
    },
    officeID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'office',
      require: true,
    },
    appointmenStatustID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'appointmenStatus',
      require: true,
    },
    bookingID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'booking',
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json

const Appointment = mongoose.model('appointments', appointmentSchema);

module.exports = Appointment;

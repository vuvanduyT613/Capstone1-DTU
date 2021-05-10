const mongoose = require('mongoose');

const officeDoctorSchema = mongoose.Schema(
  {
    officeID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Office',
      require: true,
    },
    dayOfWeek: {
      type: Date,
      default: Date.now(),
    },
    isAvailable: {
      type: String,
      maxLength: 1,
    },
    insuranceName: {
      type: String,
      require: true,
      maxLength: 200,
    },
    reason: {
      type: String,
      require: true,
      maxLength: 500,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json

const OfficeDoctor = mongoose.model('officeDoctor', officeDoctorSchema);

module.exports = OfficeDoctor;

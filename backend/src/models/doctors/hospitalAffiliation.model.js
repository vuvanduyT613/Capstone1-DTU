const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema(
  {
    doctorID: {
      type: String,
      required: true,
      ref: 'Doctor',
    },
    hospitalName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      private: true, // used by the toJSON plugin
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      default: Date.now(),
    },
    country: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json;

/**
 * @typedef Hospital
 */
const Hospital = mongoose.model('hospitals', hospitalSchema);

module.exports = Hospital;

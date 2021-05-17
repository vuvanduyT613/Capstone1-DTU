const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

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
      max: 50,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      min: 8,
      max: 50,
      private: true, // used by the toJSON plugin
    },
    country: {
      type: String,
      default: 'Countrys',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
hospitalSchema.plugin(toJSON);
hospitalSchema.plugin(paginate);

/**
 * @typedef Hospital
 */
const Hospital = mongoose.model('hospitals', hospitalSchema);

module.exports = Hospital;

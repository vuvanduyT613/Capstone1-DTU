const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const doctorSchema = mongoose.Schema(
  {
    fistName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    professionalStateme: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      private: true, // used by the toJSON plugin
    },
    practicingFrom: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
doctorSchema.plugin(toJSON);
doctorSchema.plugin(paginate);

/**
 * @typedef Doctor
 */
const Doctor = mongoose.model('doctors', doctorSchema);

module.exports = Doctor;

const mongoose = require('mongoose');

const speciallzationSchema = mongoose.Schema(
  {
    speciallzationName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json;

/**
 * @typedef Speciallzation
 */
const Speciallzation = mongoose.model('speciallzations', speciallzationSchema);

module.exports = Speciallzation;

const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const speciallzationSchema = mongoose.Schema(
  {
    speciallzationName: {
      type: String,
      max: 50,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
speciallzationSchema.plugin(toJSON);
speciallzationSchema.plugin(paginate);

/**
 * @typedef Speciallzation
 */
const Speciallzation = mongoose.model('speciallzations', speciallzationSchema);

module.exports = Speciallzation;

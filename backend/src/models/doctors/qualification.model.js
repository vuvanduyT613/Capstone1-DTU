const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const qualificationSchema = mongoose.Schema(
  {
    doctorID: {
      type: String,
      required: true,
      ref: 'Doctor',
    },
    qualificationName: {
      type: String,
      required: true,
      unique: true,
      max: 50,
      trim: true,
    },
    professionalStateme: {
      type: String,
      required: true,
      trim: true,
      min: 8,
      private: true, // used by the toJSON plugin
    },
    practicingFrom: {
      type: String,
      min: 8,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
qualificationSchema.plugin(toJSON);
qualificationSchema.plugin(paginate);

/**
 * @typedef Qualification
 */
const Qualification = mongoose.model('qualification', qualificationSchema);

module.exports = Qualification;

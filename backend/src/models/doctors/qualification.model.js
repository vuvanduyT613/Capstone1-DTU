const mongoose = require('mongoose');

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
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Qualification
 */
const Qualification = mongoose.model('qualification', qualificationSchema);

module.exports = Qualification;

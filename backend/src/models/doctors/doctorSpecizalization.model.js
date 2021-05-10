const mongoose = require('mongoose');

const doctorSpecizalizationSchema = mongoose.Schema(
  {
    doctorID: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: 'Doctor',
    },
    specializationID: {
      type: mongoose.SchemaTypes.ObjectId,
      require: true,
      ref: 'Speciallzation',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json;

/**
 * @typedef DoctorSpecizalization
 */
const DoctorSpecizalization = mongoose.model('doctorSpecizalizations', doctorSpecizalizationSchema);

module.exports = DoctorSpecizalization;

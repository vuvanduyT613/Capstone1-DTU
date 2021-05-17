const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const bookingSchema = mongoose.Schema({
  bookingStatus: {
    type: String,
    require: true,
  },
});

// add plugin that converts mongoose to json
bookingSchema.plugin(toJSON);
bookingSchema.plugin(paginate);

/**
 * @typedef Booking
 */
const Booking = mongoose.model('bookinGs', bookingSchema);

module.exports = Booking;

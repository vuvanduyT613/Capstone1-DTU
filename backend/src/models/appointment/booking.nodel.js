const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  bookingStatus: {
    type: String,
    require: true,
  },
});

// add plugin that converts mongoose to json

const Booking = mongoose.model('bookinGs', bookingSchema);

module.exports = Booking;

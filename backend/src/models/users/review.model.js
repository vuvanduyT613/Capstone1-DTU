const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const reviewSchema = mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    require: true,
  },
  doctorID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Doctor',
    require: true,
  },
  isReviewAnonymous: {
    type: String,
    require: true,
  },
  waitTimeRating: {
    type: Number,
  },
  besideMannerRating: {
    type: Number,
  },
  overallRating: {
    type: Number,
  },
  review: {
    type: String,
    maxlength: 2000,
  },
  isDocorRecomment: {
    type: String,
    maxlength: 2000,
  },
});

// add plugin that converts mongoose to json
reviewSchema.plugin(toJSON);
reviewSchema.plugin(paginate);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

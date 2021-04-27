const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('../plugins');

const reviewSchema = mongoose.Schema({
  userAccountId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    require: true,
  },
});

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

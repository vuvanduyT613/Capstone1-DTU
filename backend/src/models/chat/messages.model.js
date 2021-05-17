const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const messageSchema = mongoose.Schema(
  {
    chatRoomID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'chatRooms',
      require: true,
    },
    userID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'users',
      require: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
messageSchema.plugin(toJSON);
messageSchema.plugin(paginate);
/**
 * @typedef ChatRoom
 */
const Message = mongoose.model('messages', messageSchema);

module.exports = Message;

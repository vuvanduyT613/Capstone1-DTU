const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const chatRoomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
chatRoomSchema.plugin(toJSON);
chatRoomSchema.plugin(paginate);

/**
 * @typedef ChatRoom
 */
const ChatRoom = mongoose.model('chatRooms', chatRoomSchema);

module.exports = ChatRoom;

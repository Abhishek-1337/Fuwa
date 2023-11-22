const mongoose = require("mongoose");
const User = require("./userModel");

const friendInvitationSchema = mongoose.Schema({
  senderId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  recieverId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const FriendInvitation = mongoose.model(
  "FriendInvitation",
  friendInvitationSchema
);
module.exports = FriendInvitation;

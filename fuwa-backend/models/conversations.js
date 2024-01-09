const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Message",
    },
  ],
});

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;

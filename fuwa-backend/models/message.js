const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
  },
  type: {
    type: String,
    enum: ["DIRECT", "GROUP"],
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;

const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: [true, "There should be some content to sent to user"],
  },
  date: {
    type: Date,
    require: [true, "Every message should be labeled with its date"],
  },
  type: {
    type: String,
    enum: ["DIRECT", "GROUP"],
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;

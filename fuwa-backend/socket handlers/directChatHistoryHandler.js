const Conversation = require("../models/conversations");
const { chatHistoryUpdate } = require("./updates/chat");

exports.directChatHistoryHandler = async (socket, data) => {
  try {
    const userId = socket.user.id;
    const recieverId = data.recieverId;
    const socketId = socket.id;

    console.log(userId, recieverId);
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, recieverId] },
    });

    if (conversation) {
      chatHistoryUpdate(conversation._id.toString(), socketId);
    }
  } catch (err) {
    console.log(err);
  }
};

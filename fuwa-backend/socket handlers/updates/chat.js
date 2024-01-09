const Conversation = require("../../models/conversations");
const {
  getSocketServerInstance,
  getActiveConnection,
} = require("../../serverStore");

exports.chatHistoryUpdate = async (
  conversationId,
  toSpecifiedSocketId = null
) => {
  const conversation = await Conversation.findById(conversationId).populate({
    path: "messages",
    model: "Message",
    populate: {
      path: "author",
      model: "User",
      select: "name _id",
    },
  });

  if (conversation) {
    const io = getSocketServerInstance();

    if (toSpecifiedSocketId) {
      //update chat history for the user
      io.to(toSpecifiedSocketId).emit("direct-chat-history", {
        messages: conversation.messages,
        participants: conversation.participants,
      });
    }

    //If user of the conversations are online update their chat historyx
    conversation.participants.forEach((userId) => {
      const activeConnection = getActiveConnection(userId.toString());

      activeConnection.forEach((socketId) => {
        io.to(socketId).emit("direct-chat-history", {
          messages: conversation.messages,
          participants: conversation.participants,
        });
      });
    });
  }
};

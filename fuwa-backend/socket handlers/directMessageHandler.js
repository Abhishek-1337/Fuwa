const Message = require("../models/message");
const Conversation = require("../models/conversations");
const { chatHistoryUpdate } = require("./updates/chat");

exports.directMessageHandler = async (socket, data) => {
  try {
    console.log("Event is being handled");
    const { recieverId, content } = data;
    const userId = socket.user.id;

    //Save the content into the database
    const message = await Message.create({
      content,
      author: userId,
      type: "DIRECT",
      date: new Date(),
    });

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, recieverId] },
    });
    //If there's already a conversation between reciever and sender then push the message id to the messages field in the document
    if (conversation) {
      conversation.messages.push(message);
      await conversation.save();

      //Update chat in client side if online
      chatHistoryUpdate(conversation._id.toString());
    } else {
      const newConversation = await Conversation.create({
        participants: [userId, recieverId],
        messages: [message._id],
      });

      //update chat in client side if they are online
      chatHistoryUpdate(newConversation._id.toString());
    }
  } catch (err) {
    console.log(err);
  }
};

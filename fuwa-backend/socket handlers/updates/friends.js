const FriendInvitation = require("../../models/friendInvitationModel");
const {
  getActiveConnection,
  getSocketServerInstance,
} = require("../../serverStore");

exports.updatePendingFriendInvitation = async (userId) => {
  try {
    const pendingInvitation = await FriendInvitation.find({
      recieverId: userId,
    }).populate({ path: "senderId", select: "_id username email" });
    console.log(pendingInvitation);
    //get all active connection of user
    const recieveList = getActiveConnection(userId);
    const io = getSocketServerInstance();

    recieveList.forEach((recieverSocketId) => {
      io.to(recieverSocketId).emit("friend-invitation", {
        pendingFriendInvitations: pendingInvitation ? pendingInvitation : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};

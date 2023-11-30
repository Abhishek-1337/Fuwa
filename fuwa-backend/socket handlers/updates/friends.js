const FriendInvitation = require("../../models/friendInvitationModel");
const {
  getActiveConnection,
  getSocketServerInstance,
} = require("../../serverStore");

exports.updatePendingFriendInvitation = async (userId) => {
  try {
    const pendingInvitation = await FriendInvitation.findOne({
      recieverId: userId,
    });

    //get all active connection of user
    const recieveList = getActiveConnection(pendingInvitation._id);

    const io = getSocketServerInstance();

    recieveList.forEach((recieverSocketId) => {
      io.to(recieverSocketId).emit("friend-invitation", {
        pendingInvitations: pendingInvitation ? pendingInvitation : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};

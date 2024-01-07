const FriendInvitation = require("../../models/friendInvitationModel");
const User = require("../../models/userModel");
const {
  getActiveConnection,
  getSocketServerInstance,
} = require("../../serverStore");

exports.updatePendingFriendInvitation = async (userId) => {
  try {
    const pendingInvitation = await FriendInvitation.find({
      recieverId: userId,
    }).populate({ path: "senderId", select: "_id name email" });
    console.log(pendingInvitation);
    //get all active connection of user
    const recieveList = getActiveConnection(userId);
    const io = getSocketServerInstance();
    console.log("recieveList");
    console.log(recieveList);
    recieveList.forEach((recieverSocketId) => {
      io.to(recieverSocketId).emit("friend-invitation", {
        pendingFriendInvitations: pendingInvitation ? pendingInvitation : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateFriends = async (userId) => {
  try {
    const recieverList = getActiveConnection(userId);
    if (recieverList.length > 0) {
      const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
        {
          path: "friends",
          select: "_id name email",
        }
      );

      if (user) {
        const friendsList = user.friends.map((friend) => {
          return {
            id: friend._id,
            name: friend.name,
            email: friend.email,
          };
        });

        const io = getSocketServerInstance();

        recieverList.forEach((recieveSocketId) => {
          io.to(recieveSocketId).emit("friends-list", {
            friends: friendsList ? friendsList : [],
          });
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

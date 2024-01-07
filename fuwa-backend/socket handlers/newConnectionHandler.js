const serverStore = require("../serverStore");
const friends = require("./updates/friends");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  serverStore.setConnectedUser({ socketId: socket.id, userId: userDetails.id });
  console.log(userDetails);
  //Whenever new socket connection is established display all the info about connected user.
  friends.updatePendingFriendInvitation(userDetails.id);
  friends.updateFriends(userDetails.id);
};

module.exports = newConnectionHandler;

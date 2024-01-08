const serverStore = require("../serverStore");
const friends = require("./updates/friends");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  serverStore.setConnectedUser({ socketId: socket.id, userId: userDetails.id });
  console.log(userDetails);
  //Whenever new socket connection is established display all the info about connected user.
  friends.updateFriends(userDetails.id);
  friends.updatePendingFriendInvitation(userDetails.id);
};

module.exports = newConnectionHandler;

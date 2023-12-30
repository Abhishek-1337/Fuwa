const serverStore = require("../serverStore");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;

  "newConnectionHandler " + userDetails;
  serverStore.setConnectedUser({ socketId: socket.id, userId: userDetails.id });
};

module.exports = newConnectionHandler;

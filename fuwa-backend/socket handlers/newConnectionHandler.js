const serverStore = require("../serverStore");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  console.log(userDetails);
  serverStore.setConnectedUser({ socketId: socket.id, userId: userDetails.id });
};

module.exports = newConnectionHandler;

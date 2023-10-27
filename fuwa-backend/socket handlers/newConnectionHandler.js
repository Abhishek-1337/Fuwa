const setConnectedUser = require("../serverStore");

exports.newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  console.log(userDetails);
  setConnectedUser({ socketId: socket.id, userId: userDetails.id });
};

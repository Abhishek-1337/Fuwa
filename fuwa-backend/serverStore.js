const connectedUser = new Map();

exports.setConnectedUser = ({ socketId, userId }) => {
  connectedUser.set(socketId, { userId });
  console.log(connectedUser);
};

exports.removeConnectedUser = (socketId) => {
  if (connectedUser.has(socketId)) {
    connectedUser.delete(socketId);
  }
  console.log("After deletion");
  console.log(connectedUser);
};

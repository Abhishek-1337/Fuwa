const connectedUser = new Map();

let io = null;

exports.setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

exports.getSocketServerInstance = () => {
  return io;
};

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

let activeConnection = [];

exports.getActiveConnection = (userId) => {
  connectedUser.forEach((key, value) => {
    if (value.userId === userId) {
      activeConnection.push(key);
    }
  });
  return activeConnection;
};

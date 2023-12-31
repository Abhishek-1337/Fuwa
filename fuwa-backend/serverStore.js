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
  console.log("New connected user");
  console.log(connectedUser);
};

exports.removeConnectedUser = (socketId) => {
  if (connectedUser.has(socketId)) {
    connectedUser.delete(socketId);
    console.log("New connected users after deletion", connectedUser);
  }
};

exports.getActiveConnection = (userId) => {
  let activeConnection = [];
  connectedUser.forEach((value, key) => {
    if (value.userId === userId) {
      activeConnection.push(key);
    }
  });
  return activeConnection;
};

exports.getOnlineUsers = (userId) => {
  let onlineUsers = [];
  connectedUser.forEach((value, key) => {
    onlineUsers.push(value.userId);
  });
  return onlineUsers;
};

const connectedUser = new Map();

const setConnectedUser = ({ socketId, userId }) => {
  connectedUser.set(socketId, { userId });
  console.log(connectedUser);
};

module.exports = setConnectedUser;

const connectedUser = new Map();
const { v4: uuidv4 } = require("uuid");

let io = null;
let activeRooms = [];

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

exports.setNewRoomDetails = (userId, socketId) => {
  const newActiveRoom = {
    roomCreator: {
      userId,
      socketId,
    },
    participants: [
      {
        userId,
        socketId,
      },
    ],
    roomId: uuidv4(),
  };

  activeRooms = [...activeRooms, newActiveRoom];
  return activeRooms;
};

exports.getActiveRooms = () => {
  return [...activeRooms];
};

exports.getActiveRoom = (roomId) => {
  return activeRooms.find((room) => room.roomId === roomId);
};

exports.joinActiveRoom = (data) => {
  const activeRoom = activeRooms.find((room) => room.roomId === data.roomId);
  activeRooms = activeRooms.filter((room) => room.roomId !== data.roomId);

  const updatedRoom = {
    ...activeRoom,
    participants: [
      ...activeRoom.participants,
      { userId: data.userId, socketId: data.socketId },
    ],
  };

  console.log("updated room");
  console.log(updatedRoom);

  activeRooms.push(updatedRoom);
};

exports.leaveActiveRoom = (data) => {
  const activeRoom = activeRooms.find((room) => room.roomId === data.roomId);

  if (activeRoom) {
    activeRooms = activeRooms.filter((room) => room.roomId !== data.roomId);
    const copyActiveRoom = { ...activeRoom };
    copyActiveRoom.participants = copyActiveRoom.participants.filter(
      (participant) => participant.socketId !== data.socketId
    );

    if (copyActiveRoom.participants.length > 0) {
      activeRooms.push(copyActiveRoom);
    }
  }
};

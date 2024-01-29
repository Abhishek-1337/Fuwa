const serverStore = require("../serverStore");
const room = require("./updates/room");

const roomJoinHandler = (data, socket) => {
  const { roomId } = data;

  const userId = socket.user.id;
  const socketId = socket.id;

  serverStore.joinActiveRoom({ roomId, userId, socketId });
  room.updateRooms();
};

module.exports = roomJoinHandler;

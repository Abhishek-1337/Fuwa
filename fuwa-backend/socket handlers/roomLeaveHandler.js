const serverStore = require("../serverStore");
const room = require("./updates/room");

exports.roomLeaveHandler = (data, socket) => {
  const socketId = socket.id;
  const { roomId } = data;

  const activeRoom = serverStore.getActiveRoom(roomId);
  if (activeRoom) {
    serverStore.leaveActiveRoom({ socketId, roomId });
    room.updateRooms();
  }
};

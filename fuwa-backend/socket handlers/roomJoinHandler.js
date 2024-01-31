const serverStore = require("../serverStore");
const room = require("./updates/room");

const roomJoinHandler = (data, socket) => {
  const { roomId } = data;

  const userId = socket.user.id;
  const socketId = socket.id;

  const activeRoom = serverStore.getActiveRoom(roomId);
  serverStore.joinActiveRoom({ roomId, userId, socketId });

  activeRoom.participants.forEach((participant) => {
    if (participant.socketId !== socketId) {
      //Don't send the connection prepare event to user who is      joining
      socket.to(participant.socketId).emit("conn-prepare", {
        connUserSocketId: socketId,
      });
    }
  });

  room.updateRooms();
};

module.exports = roomJoinHandler;

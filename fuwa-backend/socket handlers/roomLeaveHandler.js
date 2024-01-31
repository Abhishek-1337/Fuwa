const serverStore = require("../serverStore");
const room = require("./updates/room");

exports.roomLeaveHandler = (data, socket) => {
  const socketId = socket.id;
  const { roomId } = data;

  const activeRoom = serverStore.getActiveRoom(roomId);
  if (activeRoom) {
    serverStore.leaveActiveRoom({ socketId, roomId });

    activeRoom.participants.forEach((participant) => {
      if (participant.socketId !== socketId) {
        socket.to(participant.socketId).emit("room-leave-participant", {
          connUserSocketId: socketId,
        });
      }
    });
    room.updateRooms();
  }
};

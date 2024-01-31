const serverStore = require("../serverStore");
const room = require("./updates/room");

const disconnectHandler = (socket) => {
  const activeRooms = serverStore.getActiveRooms();
  activeRooms.forEach((activeRoom) => {
    const userInRoom = activeRoom.participants.some(
      (participant) => participant.socketId === socket.id
    );
    if (userInRoom) {
      serverStore.leaveActiveRoom({
        roomId: activeRoom.roomId,
        socketId: socket.id,
      });
      room.updateRooms();
    }
  });
  serverStore.removeConnectedUser(socket.id);
};

module.exports = disconnectHandler;

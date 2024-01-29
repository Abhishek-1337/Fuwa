const serverStore = require("../serverStore");
const room = require("./updates/room");

const disconnectHandler = (socket) => {
  serverStore.removeConnectedUser(socket.id);

  const activeRooms = serverStore.getActiveRooms();
  activeRooms.forEach((activeRoom) => {
    const userInRoom = activeRoom.participants.some(
      (participant) => participant.socketId === socket.id
    );
    if (userInRoom) {
      serverStore.leaveActiveRoom({ roomId: activeRoom.roomId }, socket);
      room.updateRooms();
    }
  });
};

module.exports = disconnectHandler;

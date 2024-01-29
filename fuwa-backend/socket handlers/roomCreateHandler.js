const serverStore = require("../serverStore");
const room = require("./updates/room");

exports.roomCreateHandler = (socket) => {
  const socketId = socket.id;
  const userId = socket.user.id;

  const roomDetails = serverStore.setNewRoomDetails(userId, socketId);
  console.log("Active rooms");
  console.log(roomDetails);
  socket.emit("room-create", { roomDetails });

  //sent client the update of rooms that are present in server
  room.updateRooms();
};

const serverStore = require("../../serverStore");

exports.updateRooms = (toSpecifiedSocketId = null) => {
  const io = serverStore.getSocketServerInstance();

  //get all the active rooms stored in server
  const activeRooms = serverStore.getActiveRooms();

  if (toSpecifiedSocketId) {
    io.to(toSpecifiedSocketId).emit("active-rooms", {
      activeRooms,
    });
  } else {
    io.emit("active-rooms", { activeRooms });
  }
};

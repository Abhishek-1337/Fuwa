exports.peerConnectInitializationHandler = (data, socket) => {
  const { connUserSocketId } = data;

  const initData = {
    connUserSocketId: socket.id,
  };

  socket.to(connUserSocketId).emit("conn-init", initData);
};

exports.signallingPeerHandler = (data, socket) => {
  const { connUserSocketId, signal } = data;

  const signallingData = {
    connUserSocketId: socket.id,
    signal,
  };

  socket.to(connUserSocketId).emit("conn-signal", signallingData);
};

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  //Same connect event but when client is connected to server.
  io.on("connect", (socket) => {
    console.log("user connected");
    console.log(socket.id);
  });
};

module.exports = {
  registerSocketServer,
};

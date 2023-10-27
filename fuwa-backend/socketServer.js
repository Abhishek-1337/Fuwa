const {
  newConnectionHandler,
} = require("./socket handlers/newConnectionHandler");
const authSocket = require("./controllers/authSocket");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  //use authSocket middleware before allowing it to connect with client
  io.use((socket, next) => {
    authSocket.verifySocketToken(socket, next);
  });

  //Same connect event but when client is connected to server.
  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);
    newConnectionHandler(socket, io);
  });
};

module.exports = {
  registerSocketServer,
};

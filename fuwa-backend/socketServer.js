const newConnectionHandler = require("./socket handlers/newConnectionHandler");
const authSocket = require("./controllers/authSocket");
const disconnectHandler = require("./socket handlers/disconnectHandler");
const { setSocketServerInstance } = require("./serverStore");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  setSocketServerInstance(io);
  //use authSocket middleware before allowing it to connect with client
  io.use((socket, next) => {
    authSocket.verifySocketToken(socket, next);
  });

  //Same connect event but when client is connected to server.
  //We have only one instance of io and many instances of socket according to the number of devices connected
  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);
    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });
};

module.exports = {
  registerSocketServer,
};

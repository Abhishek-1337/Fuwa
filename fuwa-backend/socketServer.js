const newConnectionHandler = require("./socket handlers/newConnectionHandler");
const authSocket = require("./controllers/authSocket");
const disconnectHandler = require("./socket handlers/disconnectHandler");
const { setSocketServerInstance, getOnlineUsers } = require("./serverStore");
const {
  directMessageHandler,
} = require("./socket handlers/directMessageHandler");
const roomCreateHandler = require("./socket handlers/roomCreateHandler");
const {
  directChatHistoryHandler,
} = require("./socket handlers/directChatHistoryHandler");
const roomJoinHandler = require("./socket handlers/roomJoinHandler");
const { roomLeaveHandler } = require("./socket handlers/roomLeaveHandler");
const {
  peerConnectInitializationHandler,
} = require("./socket handlers/peerConnectInitializationHandler");
const serverStore = require("./serverStore");
const {
  signallingPeerHandler,
} = require("./socket handlers/signallingPeerHandler");

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

  const emitOnlineUsers = () => {
    const onlineUsers = getOnlineUsers();
    io.emit("online-users", { onlineUsers });
  };

  io.on("connect", (socket) => {
    console.log("user connected");
    console.log(socket.id);

    newConnectionHandler(socket, io);
    emitOnlineUsers();

    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });

    socket.on("direct-message", (data) => {
      directMessageHandler(socket, data);
    });

    socket.on("direct-chat-history", (data) => {
      directChatHistoryHandler(socket, data);
    });

    socket.on("room-create", () => {
      roomCreateHandler.roomCreateHandler(socket);
    });

    socket.on("room-join", (data) => {
      roomJoinHandler(data, socket);
    });

    socket.on("room-close", (data) => {
      roomLeaveHandler(data, socket);
    });

    socket.on("conn-init", (data) => {
      console.log("init krli");
      peerConnectInitializationHandler(data, socket);
    });

    socket.on("conn-signal", (data) => {
      console.log("signal bhej rhe hai join krne wale user ko");
      signallingPeerHandler(data, socket);
    });
  });

  setInterval(() => {
    emitOnlineUsers();
  }, [8 * 1000]);
};

module.exports = {
  registerSocketServer,
};

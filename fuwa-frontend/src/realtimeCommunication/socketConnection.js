import { io } from "socket.io-client";

let socket = null;
export const connectWithSocketServer = (userDetails) => {
  socket = io("http://localhost:3000", {
    auth: {
      token: userDetails.token,
    },
  });
  //connect event when connected to server, passed with a callback function to execute when the event is triggered.
  socket.on("connect", () => {
    console.log("successfully connected with socket.io server");
    console.log(socket.id);
  });
};

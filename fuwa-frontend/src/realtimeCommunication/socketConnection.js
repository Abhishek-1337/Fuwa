import { io } from "socket.io-client";
import store from "../store/index";
import { friendActions } from "../store/slices/friendsSlice";
import { updateDirectChatHistoryIfActive } from "../components/shared/utils/chat";
import { newRoomCreated, updateActiveRooms } from "./roomHandler";
import * as webRTCHandler from "./webRTCHandler";

let socket = null;
export const connectWithSocketServer = (userDetails) => {
  //To send token we send a configuration with a token attached to it
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

  socket.on("friend-invitation", (data) => {
    const { pendingFriendInvitations } = data;
    store.dispatch(
      friendActions.setPendingFriendInvitation(pendingFriendInvitations)
    );
  });

  socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(friendActions.setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(friendActions.setOnlineFriends(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    console.log("chat history came");
    console.log(data);
    updateDirectChatHistoryIfActive(data);
  });

  socket.on("room-create", (data) => {
    console.log("created room details came from server");
    newRoomCreated(data);
  });

  socket.on("active-rooms", (data) => {
    updateActiveRooms(data);
  });

  socket.on("conn-prepare", (data) => {
    console.log("Please prepare for webRTC connection");
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false); //false value if for whether the user is initiator or not
    socket.emit("conn-init", { connUserSocketId });
  });

  socket.on("conn-init", (data) => {
    //The initiator will handle this code.
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });

  socket.on("conn-signal", (data) => {
    webRTCHandler.handleSignalData(data);
  });

  socket.on("room-leave-participant", (data) => {
    console.log(" A user left the room");
    webRTCHandler.handleParticipantLeft(data);
  });
};

export const sendDirectMessages = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit("room-create");
};

export const joinRoom = (data) => {
  socket.emit("room-join", data);
};

export const closeRoom = (data) => {
  socket.emit("room-close", data);
};

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
};

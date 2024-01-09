import { io } from "socket.io-client";
import store from "../store/index";
import { friendActions } from "../store/slices/friendsSlice";

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
    console.log("pendin");
    console.log(pendingFriendInvitations);
    store.dispatch(
      friendActions.setPendingFriendInvitation(pendingFriendInvitations)
    );
  });

  socket.on("friends-list", (data) => {
    const { friends } = data;
    console.log(friends);
    store.dispatch(friendActions.setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(friendActions.setOnlineFriends(onlineUsers));
  });
};

export const sendDirectMessages = (data) => {
  console.log(data);
  socket.emit("direct-message", data);
};

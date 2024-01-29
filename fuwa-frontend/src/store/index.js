import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import alertSlice from "./slices/alertSlice";
import friendSlice from "./slices/friendsSlice";
import chatSlice from "./slices/chatSlice";
import roomSlice from "./slices/roomSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    friend: friendSlice.reducer,
    chat: chatSlice.reducer,
    room: roomSlice.reducer,
  },
});

export default store;

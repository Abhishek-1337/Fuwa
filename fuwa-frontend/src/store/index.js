import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import alertSlice from "./slices/alertSlice";
import friendSlice from "./slices/friendsSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    friend: friendSlice.reducer,
    chat: chatSlice.reducer,
  },
});

export default store;
